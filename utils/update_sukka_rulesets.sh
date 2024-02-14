#!/bin/sh

cd /tmp
WD=ruleset.$(shuf -i 1-65535 -n 1)
mkdir -p $WD
cd $WD
git clone ssh://git@github.com/timwa0669/ruleset.git
cd ruleset/ruleset
curl -fsL https://ruleset.skk.moe/List/ip/reject.conf > SukkaRejectIP.list
git add SukkaRejectIP.list
git commit -m 'Bot: Update Sukka ruleset'
git push
cd ../../../
rm -rf $WD
exit 0