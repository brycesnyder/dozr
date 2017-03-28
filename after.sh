cd /vagrant
cp -n .env.example .env
php artisan migrate
php artisan db:seed

echo 
echo '----------------------------------------------------------------------'
echo '        ____'
echo '    \  i | o|'
echo '    |>#######'
echo '    /(_______)'
echo 'Your server is configured to run on' $(cat Homestead.yaml | grep ip)
echo '----------------------------------------------------------------------'

