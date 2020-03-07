// Section 14

var icons = {
  header: "icon-arrow-down",
  activeHeader: "icon-arrow-up"
};
// Init accrodion Tarifs section
$(".promoblock-wrapper-14 .accordion").accordion({
  active: false,
  collapsible: true,
  icons: icons,
  heightStyle: "content"
});
// Init accordion Individual plan section
$(".promoblock-wrapper-15 .accordion").accordion({
  active: 2,
  collapsible: true,
  icons: icons
});

// Click toggle
$(".table-row-primary").on("click", ".table-show-row", function() {
  // Icon
  var icon = $(this).find("span");
  // Nested Row
  var secondaryRow = $(this)
    .closest(".table-row-primary")
    .nextAll(".table-row-secondary:first");

  // If Nested row exist toggle icon
  if ($(secondaryRow).length) {
    icon.hasClass("icon-arrow-up")
      ? icon.attr("class", "icon-arrow-down")
      : icon.attr("class", "icon-arrow-up");
  }

  // Show/hide nested row
  if ($(secondaryRow).is(":hidden")) {
    $(secondaryRow).show();
  } else {
    $(secondaryRow).hide();
  }
});

// Section 15

// Single checkbox
$(".option-item .checkbox-container input[type=checkbox]").on(
  "change",
  function() {
    var accordionContent = $(this).closest(".option-item");
    //console.log($(this).is(":checked"));
    if ($(this).is(":checked")) {
      //checkbox is checked
      accordionContent.toggleClass("check-toggle");
    } else {
      accordionContent.toggleClass("check-toggle");
    }
  }
);

// Toggle All checkboxes
$(".option-all .checkbox-container input[type=checkbox]").on(
  "change",
  function() {
    // all checkboxes array
    var checkBoxes = $(".option-item .checkbox-container input[type=checkbox]");
    var isChecked = $(this).prop("checked");

    //if main checkbox is checked
    if (isChecked) {
      checkBoxes.each(function() {
        // check all
        $(this)
          .closest(".option-item")
          .removeClass("check-toggle");
        $(this).prop("checked", true);
      });
    } else {
      checkBoxes.each(function() {
        $(this)
          .closest(".option-item")
          .addClass("check-toggle");
        $(this).prop("checked", false);
      });
    }
  }
);
