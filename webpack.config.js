module:{
  rules:[
    {
      test:/\/css$/,
      use:[
        'style-loader',
        'css-loader'
      ]
    },
    {
      test:/.(png|gif|jpg|svg|ttf)$/,
      use:[
        'file-loader'
      ]
    }
  ]
}




