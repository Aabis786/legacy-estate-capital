<?php
// Namecheap shared-hosting endpoint; enquiries are retained privately outside the web root and a notification is attempted.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
function reply($code, $message) { http_response_code($code); echo json_encode(['message'=>$message]); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') reply(405, 'Please use the enquiry form.');
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!in_array($origin, ['https://legacyestatecapital.com','https://www.legacyestatecapital.com'], true)) reply(403, 'Please submit from the Legacy Estate Capital website.');
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 16000) reply(413, 'Your enquiry is too long.');
function field($key,$max) { $v=$_POST[$key] ?? ''; if (!is_string($v) || strlen($v)>$max) reply(422,'Please check the form fields.'); return trim($v); }
if (field('website',200) !== '') reply(422, 'Unable to process this enquiry.');
$name=field('name',100); $email=field('email',254); $company=field('company',120); $state=field('state',50); $service=field('service',100); $message=field('message',2000);
$services=['Transaction coordination','Documents & data','Property research','County recording support','Title & closing coordination','Disposition closing support','Multiple services / not sure yet'];
if (!$name || !$state || !$message || !filter_var($email,FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/',$email) || !in_array($service,$services,true) || ($_POST['consent'] ?? '') !== 'yes') reply(422,'Please complete all required fields with a valid email address.');
// Per-network cooldown. The file is outside the public document root and contains only a timestamp.
$key=hash('sha256', 'legacy-enquiry-v1|'.($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
$dir=sys_get_temp_dir().'/legacy-enquiry-rate';
if (!is_dir($dir) && !mkdir($dir,0700,true)) reply(503,'Please email colette@legacyestatecapital.com while the form is unavailable.');
$lock=fopen($dir.'/'.$key,'c+');
if (!$lock || !flock($lock,LOCK_EX)) reply(503,'Please try again shortly or email colette@legacyestatecapital.com.');
$last=(int)stream_get_contents($lock);
if (time()-$last < 60) { fclose($lock); reply(429,'Please wait one minute before sending another enquiry.'); }
ftruncate($lock,0); rewind($lock); fwrite($lock,(string)time()); fflush($lock);
$leadDir=dirname(__DIR__).'/legacy-private-enquiries';
if (!is_dir($leadDir) && !mkdir($leadDir,0700,true)) { fclose($lock); reply(503,'The enquiry could not be saved. Please try again later.'); }
$leadFile=$leadDir.'/'.gmdate('Ymd-His').'-'.bin2hex(random_bytes(8)).'.json';
$record=['received_at'=>gmdate('c'),'name'=>$name,'email'=>$email,'company'=>$company,'state'=>$state,'service'=>$service,'message'=>$message,'consent'=>'Requested enquiry response; no marketing calls/texts'];
$fp=fopen($leadFile,'x');
if (!$fp) { fclose($lock); reply(503,'The enquiry could not be saved. Please try again later.'); }
chmod($leadFile,0600);
$saved=fwrite($fp,json_encode($record,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
fclose($fp);
if ($saved === false) { fclose($lock); reply(503,'The enquiry could not be saved. Please try again later.'); }
$body="Website enquiry — Legacy Estate Capital\n\nName: $name\nEmail: $email\nCompany: $company\nTransaction state: $state\nService: $service\n\nMessage:\n$message\n\nRequested response; no marketing call/text consent.\n";
$headers=['From'=>'Legacy Estate Capital Website <colette@legacyestatecapital.com>','Reply-To'=>$email,'Content-Type'=>'text/plain; charset=UTF-8'];
$accepted=mail('colette@legacyestatecapital.com','Website enquiry: '.$service,$body,$headers);
// The private record survives an email-delivery failure.
if (!$accepted) error_log('Legacy notification not accepted; private record retained.');
fclose($lock);
// Remove stale cooldown records; no enquiry contents are stored here.
foreach (glob($dir.'/*') ?: [] as $file) { if (is_file($file) && filemtime($file)<time()-86400) @unlink($file); }
reply(200,'Your enquiry has been received. Thank you for sharing the details.');
