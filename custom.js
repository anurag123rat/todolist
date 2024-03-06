$( document ).ready(function() {
    $('#add').click(function() {

        const add_task = $("#task_add").val();

          if( add_task==="" )
          {
              alert("please add something");
          }

          else if(add_task !== "")
          {
            $("#text").append( `<li class="list-item" >` + add_task + `<i class="fa-solid fa-trash" id="test" ></i> </li>` );
             $("#task_add").val("");

          }
    });

});




  $('ul').on("click", "#test", e => $(e.target).closest('li').remove());
