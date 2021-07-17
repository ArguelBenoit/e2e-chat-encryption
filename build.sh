

# function install if module doesn't exist
# install_if_doesnt_exist () {
#   if [ `npm list -g | grep -c $1` -eq 0 ]; then
#     echo "$1 is already installed"
#   else
#     npm i $1 -g
#   fi
# }


# function build js file
# build_js_file () {
#   browserify src/"$1".js | uglifyjs > public/js/"$1".js
#   echo "$1 is builded"
# }


# install browserify and uglify
# install_if_doesnt_exist browserify
# install_if_doesnt_exist uglify-js


# if ./node_modules doesn't exist, run npm i
# if [[ -d ./node_modules ]]; then
#   echo "./node_modules exist"
# else
#   npm i
# fi


# build js files
# build_js_file index
# build_js_file public-key

browserify src/index.js | uglifyjs > public/js/index.js
browserify src/public-key.js | uglifyjs > public/js/public-key.js
