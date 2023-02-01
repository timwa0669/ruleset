#!/bin/sh

cd /tmp
WD=ruleset.$(shuf -i 1-65535 -n 1)
mkdir -p $WD
cd $WD
git clone ssh://git@github.com/timwa0669/ruleset.git
cd ruleset/ruleset
echo "# Patch: Improved compatibility with subconverter" > SukkaRejectBase.list
echo "# Patch: Improved compatibility with subconverter" > SukkaRejectCustom.list
curl -fsL https://ruleset.skk.moe/List/domainset/reject.conf >> SukkaRejectBase.list
curl -fsL https://ruleset.skk.moe/List/domainset/reject_sukka.conf >> SukkaRejectCustom.list
curl -fsL https://ruleset.skk.moe/List/ip/reject.conf > SukkaRejectIP.list
sed -i 's/^/DOMAIN,/g' SukkaRejectBase.list SukkaRejectCustom.list
sed -i 's/^DOMAIN,\./DOMAIN-SUFFIX,/g' SukkaRejectBase.list SukkaRejectCustom.list
sed -i 's/^DOMAIN,#/#/g' SukkaRejectBase.list SukkaRejectCustom.list
sed -i 's/^DOMAIN,$//g' SukkaRejectBase.list SukkaRejectCustom.list
git add SukkaRejectBase.list SukkaRejectCustom.list
git commit -m 'Bot: Update Sukka rulesets'
git push
cd ../../../
rm -rf $WD
exit 0