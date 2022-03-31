$(document).ready(function(){
    $('#submit').click(function(e){
        e.preventDefault();
        var name = '';
        var f_date = $('#date').val();
        var gender = $('input[name="gender"]:checked').val();

        var dob = new Date(f_date);
        var day = dob.getDay();

        if(day == 0){
            if(gender == 'male'){
                name = 'Kwasi';
            }else{
                name = 'Akosua';
            }
        }else if(day == 1){
            if(gender == 'male'){
                name = 'Kwadwo';
            }else{
                name = 'Adwoa';
            }
        }else if(day == 2){
            if(gender == 'male'){
                name = 'Kwabena';
            }else{
                name = 'Abenaa';
            }
        }else if(day == 3){
            if(gender == 'male'){
                name = 'Kwaku';
            }else{
                name = 'Akua';
            }
        }else if(day == 4){
            if(gender == 'male'){
                name = 'Yaw';
            }else{
                name = 'Yaa';
            }
        }else if(day == 5){
            if(gender == 'male'){
                name = 'Kofi';
            }else{
                name = 'Afua';
            }
        }else if(day == 6){
            if(gender == 'male'){
                name = 'Kwame';
            }else{
                name = 'Ama';
            }
        }

        $('#akan_name').val(name);
    });
});