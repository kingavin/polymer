UE.registerUI('images',function(editor,uiName){
	    var dialog = new UE.ui.Dialog({
	        iframeUrl:'/admin/fileadmin-selector.iframe/index/pageSize/15?uploadMimeTypes=jpg,gif,png',
	        editor:editor,
	        name:uiName,
	        title:"选择图片",
            id: 'imageDialog',
	        cssRules:"width:800px;height:350px;",
	        buttons:[
	            {
	                className:'edui-okbutton',
	                label:'确定',
	                onclick:function () {
                       
		                var data = document.getElementById(dialog.id+"_iframe").contentWindow.Callback.data;
		                for (var i=0;i<data.length;i++){
							ue.execCommand('insertHtml', '<img src="'+window.PATH_CONFIG.qiniu +'/'+data[i].urlname + '" alt="'+ data[i].name + '">');
			            }
	                    dialog.close(true);
	                }
	            },
	            {
	                className:'edui-cancelbutton',
	                label:'取消',
	                onclick:function () {
                         console.log(dialog);
	                    dialog.close(false);
	                }
	            }
	        ]});
	    var btn = new UE.ui.Button({
	        name:'插入图片',
	        title:'插入图片',
	        cssRules :'background-position: -380px 0;',
	        onclick:function () {
	            dialog.render();
	            dialog.open();
	        }
	    });
	    return btn;
	},26);