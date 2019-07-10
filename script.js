function toggleQuickSidebar(target) {
    let overlay = $('#quick-sidebar-overlay');

    if (overlay.length == 0) {
        $('body').append('<div id="quick-sidebar-overlay"></div>');
    } else {
        overlay.remove();
    }

    target.toggleClass('open');
}

// const sidebar = new PerfectScrollbar(document.querySelector('#sidebar'));
// const content = new PerfectScrollbar('#content');

$(document).on('click', '.delete', function(e) {
    e.preventDefault();

    let btn = $(this);
    swal({
        title: "Are you sure?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            btn.closest('form').submit();
        }
    });
});

$(document).on("click", ".sidebar-toggler", function() {
    $("body").toggleClass("sidebar-lg");
});

$(document).on('click', 'a[data-toggle="quick-sidebar"]', function() {
    let target = $($(this).data('target'));

    toggleQuickSidebar(target);
});

$(document).on('click', 'a[data-toggle="close-quick-sidebar"]', function() {
    let target = $(this).closest('.quick-sidebar');

    toggleQuickSidebar(target);
});

$(document).on('click', '#quick-sidebar-overlay', function() {
    toggleQuickSidebar($('.quick-sidebar'));
});