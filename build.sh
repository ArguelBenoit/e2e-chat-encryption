
# todo condition if !nodeModule
# npm i

# todo condition if !browserify
# npm install -g browserify

# todo condition if !uglify
# npm install -g uglify-js

browserify src/index.js | uglifyjs > public/index.js
browserify src/public-key.js | uglifyjs > public/public-key.js
