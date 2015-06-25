UE.registerUI('link',function(editor,uiName){
    var dialog = new UE.ui.Dialog({
        iframeUrl:'/ueditor/link.html',
        editor:editor,
        name:uiName,
        title:"插入链接",
        id:'link',
        cssRules:"width:430px;height:160px;",
        buttons:[
            {
                className:'edui-okbutton',
                label:'确定',
                onclick:function () {
                    var data = document.getElementById(dialog.id+"_iframe").contentWindow.GetLinkData();
                    if(data.text && data.link){
                        var target = data.target ? '_blank' : '_self';
                        ue.execCommand('insertHtml', '<a href="'+ data.link +'" target="'+ target + '">'+data.text+'</a>');
                    }
                    dialog.close(true);
                }
            },
            {
                className:'edui-cancelbutton',
                label:'取消',
                onclick:function () {
                    dialog.close(false);
                }
            }
        ]});
    var btn = new UE.ui.Button({
        name:'插入链接',
        title:'插入链接',
        cssRules :'background-position: -500px 0;',
        onclick:function () {
            dialog.render();
            dialog.open();
        }
    });
    return btn;
}, [4]);