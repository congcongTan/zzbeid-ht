function setButtonWavesEffect(e){$(e.currentTarget).find('[role="menu"] li a').removeClass("waves-effect"),$(e.currentTarget).find('[role="menu"] li:not(.disabled) a').addClass("waves-effect")}$(function(){$("#wizard_horizontal").steps({headerTag:"h2",bodyTag:"section",transitionEffect:"slideLeft",onInit:function(e,t){setButtonWavesEffect(e)},onStepChanged:function(e,t,n){setButtonWavesEffect(e)}}),$("#wizard_vertical").steps({headerTag:"h2",bodyTag:"section",transitionEffect:"slideLeft",stepsOrientation:"vertical",onInit:function(e,t){setButtonWavesEffect(e)},onStepChanged:function(e,t,n){setButtonWavesEffect(e)}});var i=$("#wizard_with_validation").show();i.steps({headerTag:"h3",bodyTag:"fieldset",transitionEffect:"slideLeft",onInit:function(e,t){$.AdminBSB.input.activate();var n=$(e.currentTarget).find('ul[role="tablist"] li'),i=n.length;n.css("width",100/i+"%"),setButtonWavesEffect(e)},onStepChanging:function(e,t,n){return n<t||(t<n&&(i.find(".body:eq("+n+") label.error").remove(),i.find(".body:eq("+n+") .error").removeClass("error")),i.validate().settings.ignore=":disabled,:hidden",i.valid())},onStepChanged:function(e,t,n){setButtonWavesEffect(e)},onFinishing:function(e,t){return i.validate().settings.ignore=":disabled",i.valid()},onFinished:function(e,t){swal("Good job!","Submitted!","success")}}),i.validate({highlight:function(e){$(e).parents(".form-line").addClass("error")},unhighlight:function(e){$(e).parents(".form-line").removeClass("error")},errorPlacement:function(e,t){$(t).parents(".form-group").append(e)},rules:{confirm:{equalTo:"#password"}}})});