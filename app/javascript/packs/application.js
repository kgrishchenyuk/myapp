// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
require('jquery')

Rails.start()
Turbolinks.start()
ActiveStorage.start()

$(function() {
  $('.destroy').on('click', function() {
    let post_id = $(this).closest('tr').attr('id');

    $.ajax({
      url: `/posts/${post_id}`,
      method: 'DELETE',
      success: function() {
        $(`tr#${post_id}`).fadeOut();
      },
      error: function(err) {
        console.log(err);
      }
    });
  })
});