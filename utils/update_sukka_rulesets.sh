#!/bin/sh

cd /tmp
WD=ruleset.$(shuf -i 1-65535 -n 1)
mkdir -p $WD
cd $WD
git clone ssh://git@github.com/timwa0669/ruleset.git
cd ruleset/ruleset
echo "# Patch: Improved compatibility with subconverter" > SukkaRejectCustom.list
curl -fsL https://ruleset.skk.moe/List/domainset/reject_sukka.conf >> SukkaRejectCustom.list
curl -fsL https://ruleset.skk.moe/List/ip/reject.conf > SukkaRejectIP.list
sed -i 's/^/DOMAIN,/g' SukkaRejectCustom.list
sed -i 's/^DOMAIN,\./DOMAIN-SUFFIX,/g' SukkaRejectCustom.list
sed -i 's/^DOMAIN,#/#/g' SukkaRejectCustom.list
sed -i 's/^DOMAIN,$//g' SukkaRejectCustom.list
git add SukkaRejectCustom.list SukkaRejectIP.list
git commit -m 'Bot: Update Sukka ruleset'
git push
cd ../../../
rm -rf $WD
exit 0