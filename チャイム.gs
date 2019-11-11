// 平日か判定する処理
function isWeekday(){
  var today = new Date();
  // 土日か判定
  var weekInt = today.getDay();
  if(weekInt <= 0 || 6 <= weekInt){
    return true;
  }
  // 祝日か判定
  var calendarId = "ja.japanese#holiday@group.v.calendar.google.com";
  var calendar = CalendarApp.getCalendarById(calendarId);
  var todayEvents = calendar.getEventsForDay(today);
  if(todayEvents.length > 0){
    return true;
  }
  return false;
}


// 通知内容の設定
function goodMorning_notification() {
  // 朝挨拶通知コメント
    if (isWeekday()) return;
    var textData = {
      text : 'おはようございます！朝礼は8時30分からです。'
    };
    var options = {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify(textData)
    };
  // SlackのIncoming WebhookのURL
  UrlFetchApp.fetch("https://hooks.slack.com/services/key", options);
}


function notification_when_morningAssembly_start() {
  // 朝礼開始5分前通知コメント
    if (isWeekday()) return;
    var textData = {
      text : '朝礼5分前です。席につきましょう。'
    };
    var options = {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify(textData)
    };
    // SlackのIncoming WebhookのURL
    UrlFetchApp.fetch("https://hooks.slack.com/services/key", options);
    
    // トリガー数制限の為、消去
    var triggers = ScriptApp.getProjectTriggers();
    for(var i=0; i < triggers.length; i++) {
      if (triggers[i].getHandlerFunction() == "goodMorning_notification") {
        ScriptApp.deleteTrigger(triggers[i]);
      };
    };
}

function notifyAt1stStart() {
  // 1限開始5分前通知コメント
    if (isWeekday()) return;
    var textData = {
    text : '1限5分前です。席につきましょう。'
    };
    var options = {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify(textData)
    };
    // SlackのIncoming WebhookのURL
    UrlFetchApp.fetch("https://hooks.slack.com/services/key", options);
  
    // トリガー数制限の為、消去
    var triggers = ScriptApp.getProjectTriggers();
    for(var i=0; i < triggers.length; i++) {
      if (triggers[i].getHandlerFunction() == "notification_when_morningAssembly_start") {
        ScriptApp.deleteTrigger(triggers[i]);
      };
    };
}

function notifyAt2stStart() {
  // 2限開始5分前通知コメント
    if (isWeekday()) return;
    var textData = {
      text : '2限5分前です。席につきましょう。'
    };
    var options = {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify(textData)
    };
    // SlackのIncoming WebhookのURL
    UrlFetchApp.fetch("https://hooks.slack.com/services/key", options);
}

function notifyAt3stStart() {
  // 3限開始5分前通知コメント
    if (isWeekday()) return;
    var textData = {
      text : '3限5分前です。席につきましょう。'
    };
    var options = {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify(textData)
    };
    // SlackのIncoming WebhookのURL
    UrlFetchApp.fetch("https://hooks.slack.com/services/key", options);
}

function notification_when_lunchBreak_start() {	
  // お昼休み開始通知コメント
    if (isWeekday()) return;
    var textData = {
      text : 'お昼休みです。4限は13時15分です。'
    };
    var options = {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify(textData)
    };
    // SlackのIncoming WebhookのURL
    UrlFetchApp.fetch("https://hooks.slack.com/services/key", options);
}

function notifyAt4stStart() {
  // ４限開始5分前通知コメント
    if (isWeekday()) return;
    var textData = {
      text : '4限5分前です。席につきましょう。'
    };
    var options = {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify(textData)
    };
    // SlackのIncoming WebhookのURL
    UrlFetchApp.fetch("https://hooks.slack.com/services/key", options);
}

function notifyAt5stStart() {
  // 5限開始5分前通知コメント
    if (isWeekday()) return;
    var textData = {
      text : '5限5分前です。席につきましょう。'
    };
    var options = {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify(textData)
    };
    // SlackのIncoming WebhookのURL
    UrlFetchApp.fetch("https://hooks.slack.com/services/key", options);
}

function notifyAt6stStart() {
  // 6限開始通知コメント
    if (isWeekday()) return;
    var textData = {
      text : '6限5分前です。席につきましょう。'
    };
    var options = {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify(textData)
    };
    // SlackのIncoming WebhookのURL
    UrlFetchApp.fetch("https://hooks.slack.com/services/key", options)
}

function notifyOn6thEnd() {
  // 6限終了通知コメント
    if (isWeekday()) return;
    var textData = {
      text : '今日の授業は終了です。お疲れさまでした。Nゼミの人は忘れずに!'
    };
    var options = {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify(textData)
    };
    // SlackのIncoming WebhookのURL   
    UrlFetchApp.fetch("https://hooks.slack.com/services/key", options);
}


// トリガー作成
function setTriggerAtGoodMorningStart() {
  // 朝挨拶トリガー
  var setTime = new Date();
  setTime.setHours(9);
  setTime.setMinutes(00);
  ScriptApp.newTrigger('goodMorning_notification').timeBased().at(setTime).create();
}

function setTriggerAtmorningAssemblyStart() {
  // 朝礼開始5分前通知トリガー
  var setTime = new Date();
  setTime.setHours(9);
  setTime.setMinutes(25);
  ScriptApp.newTrigger('notification_when_morningAssembly_start').timeBased().at(setTime).create();
}

function setTriggerOn1stStart() {
  // １限開始5分前通知トリガー
  var setTime = new Date();
  setTime.setHours(9);
  setTime.setMinutes(40);
  ScriptApp.newTrigger('notifyAt1stStart').timeBased().at(setTime).create();
}

function setTriggerOn2stStart() {
  // ２限開始5分前通知トリガー
  var setTime = new Date();
  setTime.setHours(10);
  setTime.setMinutes(40);
  ScriptApp.newTrigger('notifyAt2stStart').timeBased().at(setTime).create();
}

function setTriggerOn3stStart() {
  // ３限開始5分前通知トリガー
  var setTime = new Date();
  setTime.setHours(11);
  setTime.setMinutes(40);
  ScriptApp.newTrigger('notifyAt3stStart').timeBased().at(setTime).create();
}

function setTriggerAtlunchBreakStart() {
  // お昼休み開始通知トリガー
  var setTime = new Date();
  setTime.setHours(12);
  setTime.setMinutes(35);
  ScriptApp.newTrigger('notification_when_lunchBreak_start').timeBased().at(setTime).create();
}

function setTriggerOn4stStart() {
  // ４限開始5分前通知トリガー
  var setTime = new Date();
  setTime.setHours(13);
  setTime.setMinutes(10);
  ScriptApp.newTrigger('notifyAt4stStart').timeBased().at(setTime).create();
}

function setTriggerOn5stStart() {
  // 5限開始5分前通知トリガー
  var setTime = new Date();
  setTime.setHours(14);
  setTime.setMinutes(10);
  ScriptApp.newTrigger('notifyAt5stStart').timeBased().at(setTime).create();
}

function setTriggerOn6stStart() {
  // ６限開始5分前通知トリガー
  var setTime = new Date();
  setTime.setHours(15);
  setTime.setMinutes(10);
  ScriptApp.newTrigger('notifyAt6stStart').timeBased().at(setTime).create();
}

function setTriggerOn6stEnd() {
  // ６限終了通知トリガー
  var setTime = new Date();
  setTime.setHours(16);
  setTime.setMinutes(05);
  ScriptApp.newTrigger('notifyOn6thEnd').timeBased().at(setTime).create();
}

// トリガー消去
function deleteTriggers() {
  var triggers = ScriptApp.getProjectTriggers();
  for(var i=0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() == "notifyAt1stStart") {
      ScriptApp.deleteTrigger(triggers[i]);
    };
    if (triggers[i].getHandlerFunction() == "notifyAt2stStart") {
      ScriptApp.deleteTrigger(triggers[i]);
    };
    if (triggers[i].getHandlerFunction() == "notifyAt3stStart") {
      ScriptApp.deleteTrigger(triggers[i]);
    };
    if (triggers[i].getHandlerFunction() == "notification_when_lunchBreak_start") {
      ScriptApp.deleteTrigger(triggers[i]);
    };
    if (triggers[i].getHandlerFunction() == "notifyAt4stStart") {
      ScriptApp.deleteTrigger(triggers[i]);
    };
    if (triggers[i].getHandlerFunction() == "notifyAt5stStart") {
      ScriptApp.deleteTrigger(triggers[i]);
    };
    if (triggers[i].getHandlerFunction() == "notifyAt6stStart") {
      ScriptApp.deleteTrigger(triggers[i]);
    };
    if (triggers[i].getHandlerFunction() == "notifyOn6thEnd") {
      ScriptApp.deleteTrigger(triggers[i]);
    };
  };
}