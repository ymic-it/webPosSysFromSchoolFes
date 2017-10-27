
// TODO: 商品情報の扱いを決める  それまでは仮の連想配列でデバッグする
itemList = {
  '0':{'name': 'プリン', 'price':120, 'type':'food', 'postName': 'pudding'},
  '1':{'name': 'レアチーズケーキ', 'price':120, 'type': 'food', 'postName': 'cake'},
  '2':{'name': '珈琲', 'price':120, 'type': 'drink', 'postName': 'coffee'},
  '3':{'name': '紅茶', 'price':120, 'type': 'drink', 'postName': 'straighttea'},
  '4':{'name': 'Dr.Prepper', 'price':120, 'type': 'drink', 'postName': 'drpepper'}
};

postBody = {
'total':0,
'deposit':0,
'set':0,
'pudding':0,
'jelly':0,
'cake':0,
'coffee':0,
'milktea':0,
'straighttea':0,
'drpepper':0
};

selectItemList = []

function showItem(){

  Object.keys(itemList).forEach(function(val, int, array){
     $("#itemList").prepend(makeCard(itemList[val], int)).hide().fadeIn(1000);
  });

}

function selectItem(itemId){
  selectItemList.push(itemId);
  insertHtml = "";
  totalPrice = 0;
  setNum = {"food": 0, "drink": 0 }

  selectItemList.forEach(function(val, int, array){
  insertHtml += itemList[val]['name']+ ":" +itemList[val]['price'] + "<br>";
  totalPrice += itemList[val]['price'];

  // セット判定(ドクペ以外ならフラグを立てる)
  if(val < 4){
    if(itemList[val]['type'] == 'food'){
      setNum['food'] = setNum['food']+1;
    }else{
      setNum['drink'] = setNum['drink']+1;
    }
  }
});

  setCount = 0;
  if(setNum['food'] < setNum['drink']){
    setCount = setNum['food'] ;
  }else{
    setCount = setNum['drink'] ;
  }

  if(setCount > 0){
    insertHtml +=  "セット割引" + -20 * setCount +  "<br>";
    totalPrice -= 20 * setCount;

  }


  insertHtml += "合計 ：" + totalPrice;
  console.log(insertHtml);
  console.log(setNum);
  $("#selectItems").html(insertHtml).hide().fadeIn(1000);
   $("#checkPrace").html(insertHtml).hide().fadeIn(1000);

}

function postItem(){

  sendData = postBody;

  selectItemList.forEach(function(val, int, array){
    sendData[itemList[val]['postName']] =   sendData[itemList[val]['postName']] + 1;
  });

  console.log(sendData)

  $.ajax({
  type: "POST",
  url: "https://script.google.com/a/gn.iwasaki.ac.jp/macros/s/AKfycbzbSjNJVCaBidaHAAMKcFySwyd4nsahb4O7OJY14hlCqtJSJA/exec",
  data: sendData
}).done(function( msg ) {
});

}

function makeCard(val, idx){
  console.log(val);
  return '<div style="padding-top: 25px" class="col-md-2"  >\
    <div class="demo-card-wide mdl-card mdl-shadow--2dp"  onClick="selectItem('+ idx +')">\
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
