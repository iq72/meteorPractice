if (Meteor.isClient) {
  var img_data=[
    {
      img_src:"./imgs/ansha.jpg",
      img_alt:"ansha"
    },
    {
      img_src:"./imgs/insideOut.jpg",
      img_alt:"inside out"
    },{
      img_src:"./imgs/littleprince.jpg",
      img_alt:"little prince"
    },{
      img_src:"./imgs/martian.jpg",
      img_alt:"Martian"
    }
  ];
  Template.imgs.helpers({images:img_data});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
