const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')//导入在内存中自动生成的index页面的插件
//创建一个插件的实例对象
const htmlPlugin=new HtmlWebpackPlugin({
	template:path.join(__dirname,'./src/index.html'),//源文件
	filename:'index.html'//生成的内存中首页的名称
})

module.exports={
	mode:'development',//development production
	plugins:[
		htmlPlugin
	],
	module:{
		rules:[
			{test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
			//为css样式表启用模块化+modules
			{
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' },{
                loader: "sass-loader",
                options: {
                    includePaths: ["absolute/path/a", "absolute/path/b"]}
              }]},
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'images/',    //相对于dist路劲
              publicPath: 'images/',//超过limit的图片路劲会被修改到下面
              limit: 200*1024  //limit下面会被编码成base64，超过就打包
            }
          }
        ]
      },
      {
         test: /\.html$/,
         use: 'html-withimg-loader'    
       }
      
		]
	}

 }