$(function(){
var textfield = $("input[name=user]");
            $('button[type="submit"]').click(function(e) {
                e.preventDefault();
                //little validation just to check username
                if (textfield.val() != "") {
                    //$("body").scrollTo("#output");
                    $("#output").addClass("alert alert-success animated fadeInUp").html("Welcome back " + "<span style='text-transform:uppercase'>" + textfield.val() + "</span>");
                    $("#output").removeClass(' alert-danger');
                    $("input").css({
                    "height":"0",
                    "padding":"0",
                    "margin":"0",
                    "opacity":"0"
                    });
                    //change button text 
                    $('button[type="submit"]').html("continue")
                    .removeClass("btn-info")
                    .addClass("btn-default").click(function(){
                    $("input").css({
                    "height":"auto",
                    "padding":"10px",
                    "opacity":"1"
                    }).val("");
                    });
                    
                    //show avatar
                    $(".avatar").css({
                        "background-image": "url('http://api.randomuser.me/0.3.2/portraits/women/35.jpg')"
                    });
                } else {
                    //remove success mesage replaced with error message
                    $("#output").removeClass(' alert alert-success');
                    $("#output").addClass("alert alert-danger animated fadeInUp").html("sorry enter a username ");
                }
                //console.log(textfield.val());

            });
});
(function(){
    'use strict';
    var $ = jQuery;
    $.fn.extend({
        filterTable: function(){
            return this.each(function(){
                $(this).on('keyup', function(e){
                    $('.filterTable_no_results').remove();
                    var $this = $(this), search = $this.val().toLowerCase(), target = $this.attr('data-filters'), $target = $(target), $rows = $target.find('tbody tr');
                    if(search == '') {
                        $rows.show(); 
                    } else {
                        $rows.each(function(){
                            var $this = $(this);
                            $this.text().toLowerCase().indexOf(search) === -1 ? $this.hide() : $this.show();
                        })
                        if($target.find('tbody tr:visible').size() === 0) {
                            var col_count = $target.find('tr').first().find('td').size();
                            var no_results = $('<tr class="filterTable_no_results"><td colspan="'+col_count+'">No results found</td></tr>')
                            $target.find('tbody').append(no_results);
                        }
                    }
                });
            });
        }
    });
    $('[data-action="filter"]').filterTable();
})(jQuery);

$(function(){
    // attach table filter plugin to inputs
    $('[data-action="filter"]').filterTable();
    
    $('.container').on('click', '.panel-heading span.filter', function(e){
        var $this = $(this), 
                $panel = $this.parents('.panel');
        
        $panel.find('.panel-body').slideToggle();
        if($this.css('display') != 'none') {
            $panel.find('.panel-body input').focus();
        }
    });
    $('[data-toggle="tooltip"]').tooltip();
})