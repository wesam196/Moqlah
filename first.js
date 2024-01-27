var dgree=0;
    
    

    
      //  onClick="window.location.href='#s2'"
    
    $(function() {
            $('input[class="tr"]').on('change',function(){
                dgree++;
            });
                
        
            $('input[name="qus1"]').on('change',function(){
                $('input[name="qus1"]').attr("disabled",this.value!="Enable");
                window.location.href='#s2'
                
            });
               
        
     
        
        
        
            $('input[name="qus2"]').on('change',function(){
                $('input[name="qus2"]').attr("disabled",this.value!="Enable"); 
                window.location.href='#s3'
            });
    
        
             $('input[name="qus3"]').on('change',function(){
                $('input[name="qus3"]').attr("disabled",this.value!="Enable"); 
                 window.location.href='#s4'
            });       
        
            $('input[name="qus4"]').on('change',function(){
                $('input[name="qus4"]').attr("disabled",this.value!="Enable"); 
                window.location.href='#s5'
            });        

            $('input[name="qus5"]').on('change',function(){
                $('input[name="qus5"]').attr("disabled",this.value!="Enable");  
                window.location.href='#s6'
            });
     
            $('input[name="qus6"]').on('change',function(){
                $('input[name="qus6"]').attr("disabled",this.value!="Enable");  
                window.location.href='#s7'
            });
        

            $('input[name="qus7"]').on('change',function(){
                $('input[name="qus7"]').attr("disabled",this.value!="Enable");   
                window.location.href='#s8'
            });        
        
            $('input[name="qus8"]').on('change',function(){
                $('input[name="qus8"]').attr("disabled",this.value!="Enable"); 
                window.location.href='#s9'
            });        
        
            $('input[name="qus9"]').on('change',function(){
                $('input[name="qus9"]').attr("disabled",this.value!="Enable"); 
                window.location.href='#s10'
            });        
        
            $('input[name="qus10"]').on('change',function(){
                $('input[name="qus10"]').attr("disabled",this.value!="Enable"); 
                window.location.href='#s11'
            });        
        
            $('input[name="qus11"]').on('change',function(){
                $('input[name="qus11"]').attr("disabled",this.value!="Enable"); 
                //window.location.href='resultpage.html'
                $(".q").hide();
                $("#footer").show();
                $("#result").show();
                $("#doctor").show();
                window.location.href='#header'
                document.getElementById("presult").innerHTML=dgree;
                $("#footer").attr("padding-top","50px");
                var x=$('body').width();

                
           if (dgree<8){
               document.getElementById("Squaretext").innerHTML="من الواضح أنك تعاني من مشكلة في التعرف على بعض الألوان، لكن الأمر لم يصل إلى عمى الألوان بشكل كامل، ربما عليك زيارة طبيب للقيام بالمزيد من الفحصوص، والتأكد من أنك لا تعاني من مشكلة جدية في هذا الأمر";
           }
            else if(dgree>=8){
                $("#doctor").hide();
                document.getElementById("Squaretext").innerHTML="تمييزك للألوان جيد، مقلة تتمنى لك السلامة";
                

                $('#Squaretext').css({
                    'margin-top':'2%',
                    'margin-left':'0',
                });
                
                
                $("#Square").css({
                    'width':'500px',
                    'height':'50px',
                    'margin-left':'82%',
                })
                
                
                if (x<875){
                    //#result 
                    $('#result').css({
                        'margin-right':'52%',
                    })
                    $("#Square").css({
                        'width':'250px',
                        'height':'34px',
                        'margin-left':'70%',
                        
                        //margin-left: -9%;
                    });
                    $('#Squaretext').css({
                        'margin-left':'-9%',
                        'margin-top':'3%',
                    });
                
                    };
                
 

            }
            });        

          $(".tgl").click(function(){
             $("#hleft").fadeToggle();
              
          });
        
    })   
    
    

  