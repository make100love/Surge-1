/*
黄油相机PRO

[Script]
http-response https?:\/\/.*\.bybutter\.com\/(v4\/shop\/*|v4\/users\/me|v4\/shop\/shelves|v4\/editor\/template\/recommended|v4\/search\/products|v4\/template-square) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/hyxj.js

[MITM]
hostname = %APPEND% *.bybutter.com
*/ 


body = $response.body.replace(/\"ownership\":.+\/g, "\"ownership\":free").replace(/\"enable\":.+\/g, "\"enable\":true").replace(/\"memberships\":\[\]/g, "\"memberships\":[{\"endAt\":1650842277,\"id\":\"1\",\"name\":\"普通会员\",\"ownership\":\"free\",\"startAt\":1587425677,\"usageType\":\"unlimited\"}]").replace(/\"trial\":.+\/g, "\"trial\":true").replace(/\"colorful\":.+\/g, "\"colorful\":true").replace(/\"masking\":.+\/g, "\"masking\":true").replace(/"remark":"[^""]+"/g, '\"remark\":\"使用期限：永久"').replace(/\"usageType\":.+\/g, "\"usageType\":unlimited")
$done({body});
