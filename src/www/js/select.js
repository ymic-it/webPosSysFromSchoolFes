
// TODO: 商品情報の扱いを決める  それまでは仮の連想配列でデバッグする
itemList = {
  '0':{'name': 'プリン', 'price':150, 'type':'food'},
  '1':{'name': '羊羹', 'price':150, 'type': 'food'},
  '2':{'name': '珈琲', 'price':100, 'type': 'drink'},
  '3':{'name': 'ドクペ', 'price':100, type: 'drink'}
};

function showItem(){

  Object.keys(itemList).forEach(function(val, int, array){
     $("#itemList").prepend(makeCard(itemList[val])).hide().fadeIn(1000);
  });

}


function makeCard(val){
  console.log(val);
  return '<div style="padding-top: 25px" class="col-md-4"  >\
    <div class="demo-card-wide mdl-card mdl-shadow--2dp" >\
      <div class="mdl-card__title  mdlcard--border">\
        <h2 class="mdl-card__title-text">'+ val.name +'</h2>\
      </div>\
      <div class="mdl-card__supporting-text ">'+ val.price + '円 </div>\
      <div class="mdl-card__menu">\
        <div id="tt4" class="icon material-icons">share</div>\
        <div class="mdl-tooltip" for="tt4">\
          Twitterに投稿\
      </div>\
      </div>\
    </div>\
  </div>  ';

}
