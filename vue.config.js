module.exports = {
  configureWebpack: {
  	module: {
  		rules: [
	      {
	        test: /\.(png|jpg|gif)$/i,
	        use: [
	          {
	            loader: 'url-loader',
	            options: {
	              limit: 8192,
	            },
	          },
	        ],
	      },
	      {
	        test: /\.css$/,
	        use: [
				    {
				      loader: "style-loader"
				    },
				    {
				      loader: "css-loader",
				      options: {
				        url: true
				    }
				  ]
	      }
	    ],
  	}
  }
}

