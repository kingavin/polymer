UE.registerUI('attachment',function(editor,uiName){
	    var dialog = new UE.ui.Dialog({
	        iframeUrl:'/admin/fileadmin-selector.iframe/index/pageSize/15',
	        editor:editor,
	        name:uiName,
	        title:"插入附件",
            id:'attachment',
	        cssRules:"width:800px;height:500px;",
	        buttons:[
	            {
	                className:'edui-okbutton',
	                label:'确定',
	                onclick:function () {
		                var data = document.getElementById(dialog.id+"_iframe").contentWindow.Callback.data;
		                for (var i=0;i<data.length;i++){
							ue.execCommand('insertHtml', '<a href="'+window.PATH_CONFIG.qiniu +'/'+data[i].urlname + '" download="'+ data[i].filename + '">'+data[i].filename+'</a><br>');
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
	        name:'插入附件',
	        title:'插入附件',
	        cssRules :'background-position: -620px -40px;',
	        onclick:function () {
	            dialog.render();
	            dialog.open();
	        }
	    });
	    return btn;
	});