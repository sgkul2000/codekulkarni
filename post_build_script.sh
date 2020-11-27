echo Replacing paths...
sed -i.bak 's/href=\"\//href=\".\//g' dist/index.html
sed -i.bak 's/src=\"\//src=\".\//g' dist/index.html
sed -i.bak 's/srcset=\"\//srcset=\".\//g' dist/index.html
sed -i.bak 's/href=\"\//href=\".\//g' dist/404.html
sed -i.bak 's/src=\"\//src=\".\//g' dist/404.html
sed -i.bak 's/srcset=\"\//srcset=\".\//g' dist/404.html
echo Replaced successfully
echo Copying sitemap..
cp sitemap.xml dist/
echo Copied sitemap successfully