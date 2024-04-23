// load more & filters

const buttonLoadMore = jQuery("#button_load_more_container");
const selectFilter = jQuery(
  "#category_select, #format_select, #filter_by_select"
);

jQuery(document).ready(function () {
  let currentPage = 1;
  buttonLoadMore.on("click", function () {
    currentPage++;

    jQuery.ajax({
      type: "POST",
      url: "./wp-admin/admin-ajax.php",
      dataType: "json",
      data: {
        action: "load_more_photos",
        paged: currentPage,
      },
      success: function (res) {
        if (currentPage >= res.max) {
          buttonLoadMore.hide();
        }
        listPhotosHome.append(res.html);
        function teeest() {
          let newContent = document.querySelectorAll(".photo_galery_container");
          console.log(newContent);
        }
        teeest();
      },
    });
  });
  selectFilter.change(function () {
    let categoryOptionSelected = jQuery("#category_select")
      .find(":selected")
      .val();
    let formatOptionSelected = jQuery("#format_select").find(":selected").val();
    let filterByOptionSelected = jQuery(
      "#filter_by_select option:selected"
    ).val();
    console.log(categoryOptionSelected);
    console.log(formatOptionSelected);
    console.log(filterByOptionSelected);
    jQuery.ajax({
      type: "POST",
      dataType: "html",
      url: "./wp-admin/admin-ajax.php",
      data: {
        paged: currentPage,
        action: "filter_photos",
        categoryOptionSelected: categoryOptionSelected,
        formatOptionSelected: formatOptionSelected,
        filterByOptionSelected: filterByOptionSelected,
      },
      success: function (responseFilters) {
        listPhotosHome.html(responseFilters);
      },
    });
  });
});
