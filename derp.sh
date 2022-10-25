git clean -fxd
yarn install
yarn build:ci -- --debug --directory dist
cd apps/meteor/dist
tar czf ~/Rocket.Chat.tar.gz bundle

