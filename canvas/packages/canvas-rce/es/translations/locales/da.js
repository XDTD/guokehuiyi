/*
 * Copyright (C) 2021 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */
import formatMessage from "../../format-message.js";
import "../tinymce/da.js";
const locale = {
  "access_the_pretty_html_editor_37168efe": {
    "message": "Få adgang til det pæne HTML-redigeringsværktøj"
  },
  "accessibility_checker_b3af1f6c": {
    "message": "Tilgægelighedskontrol"
  },
  "add_8523c19b": {
    "message": "Tilføj"
  },
  "add_another_f4e50d57": {
    "message": "Tilføj en mere"
  },
  "add_cc_subtitles_55f0394e": {
    "message": "Tilføj undertekster"
  },
  "add_image_60b2de07": {
    "message": "Tilføj billede"
  },
  "align_11050992": {
    "message": "Juster"
  },
  "align_center_ca078feb": {
    "message": "Juster i midten"
  },
  "align_left_e9f1f93b": {
    "message": "Juster til venstre"
  },
  "align_right_9bad3ac1": {
    "message": "Juster til højre"
  },
  "alignment_and_lists_5cebcb69": {
    "message": "Justering og lister"
  },
  "all_4321c3a1": {
    "message": "Alle"
  },
  "all_apps_a50dea49": {
    "message": "Alle apps"
  },
  "alphabetical_55b5b4e0": {
    "message": "Alfabetisk"
  },
  "alt_text_611fb322": {
    "message": "Alt-tekst"
  },
  "an_error_occured_reading_the_file_ff48558b": {
    "message": "Der opstod en fejl, da filen skulle læses"
  },
  "an_error_occurred_making_a_network_request_d1bda348": {
    "message": "Der opstod en fejl under oprettelse af en netværksanmodning"
  },
  "an_error_occurred_uploading_your_media_71f1444d": {
    "message": "Der opstod en fejl ved overførsel af mediet."
  },
  "announcement_list_da155734": {
    "message": "Beskedliste"
  },
  "announcements_a4b8ed4a": {
    "message": "Beskeder"
  },
  "apply_781a2546": {
    "message": "Tildel"
  },
  "apps_54d24a47": {
    "message": "Apps"
  },
  "aspect_ratio_will_be_preserved_cb5fdfb8": {
    "message": "Dimensionsforhold bevares"
  },
  "assignments_1e02582c": {
    "message": "Opgaver"
  },
  "attributes_963ba262": {
    "message": "Attributter"
  },
  "audio_and_video_recording_not_supported_please_use_5ce3f0d7": {
    "message": "Lyd- og videooptagelse understøttes ikke, brug en anden browser."
  },
  "audio_player_for_title_20cc70d": {
    "message": "Audioafspiller til { title }"
  },
  "auto_saved_content_exists_would_you_like_to_load_t_fee528f2": {
    "message": "Der findes automatisk gemt indhold. Vil du indlæse det automatisk gemte indhold i stedet?"
  },
  "automatically_open_an_in_line_preview_preview_disp_ed784ffe": {
    "message": "Åbn automatisk en in-line forhåndsvisning. (Forhåndsvisning vises kun, når filen er blevet gemt)"
  },
  "available_folders_694d0436": {
    "message": "Tilgængelige mapper"
  },
  "below_81d4dceb": {
    "message": "Under"
  },
  "bottom_third_5f5fec1d": {
    "message": "Nederste tredjedel"
  },
  "button_color_608a0242": {
    "message": "Knapfarve"
  },
  "button_outline_cf14f071": {
    "message": "Knapkontur"
  },
  "button_outline_size_cc1d1df7": {
    "message": "Knapkonturens størrelse"
  },
  "button_shape_dbecb573": {
    "message": "Knapform"
  },
  "button_size_20f5fce1": {
    "message": "Knapstørrelse"
  },
  "buttons_and_icons_e66ee12c": {
    "message": "Knapper og ikoner"
  },
  "c_2001_acme_inc_283f7f80": {
    "message": "(c) 2001 Acme Inc."
  },
  "cancel_caeb1e68": {
    "message": "Annullér"
  },
  "choose_caption_file_9c45bc4e": {
    "message": "Vælg billedtekstfil"
  },
  "choose_usage_rights_33683854": {
    "message": "Vælg brugsrettigheder ..."
  },
  "circle_484abe63": {
    "message": "Cirkel"
  },
  "circle_unordered_list_9e3a0763": {
    "message": "cirkel usorteret liste"
  },
  "clear_2084585f": {
    "message": "Ryd"
  },
  "clear_selected_file_82388e50": {
    "message": "Ryd valgt fil"
  },
  "clear_selected_file_filename_2fe8a58e": {
    "message": "Ryd valgt fil: { filename }"
  },
  "click_or_shift_click_for_the_html_editor_25d70bb4": {
    "message": "Klik eller shift-klik for html-editoren."
  },
  "click_to_embed_imagename_c41ea8df": {
    "message": "Klik for at integrere { imageName }"
  },
  "click_to_hide_preview_3c707763": {
    "message": "Klik for at skjule forhåndsvisning"
  },
  "click_to_insert_a_link_into_the_editor_c19613aa": {
    "message": "Klik for at indsætte et link i editoren."
  },
  "click_to_show_preview_faa27051": {
    "message": "Klik for at vise forhåndsvisning"
  },
  "close_a_menu_or_dialog_also_returns_you_to_the_edi_739079e6": {
    "message": "Luk en menu eller dialog. Sender dig også tilbage til redigeringsområdet"
  },
  "close_d634289d": {
    "message": "Luk"
  },
  "closed_captions_subtitles_e6aaa016": {
    "message": "Billedtekster / undertekster"
  },
  "collaborations_5c56c15f": {
    "message": "Samarbejde"
  },
  "collapse_to_hide_types_1ab46d2e": {
    "message": "Skjul { types }"
  },
  "color_color_eb64b08": {
    "message": "Farve { color }"
  },
  "computer_1d7dfa6f": {
    "message": "Computer"
  },
  "content_1440204b": {
    "message": "Indhold"
  },
  "content_is_still_being_uploaded_if_you_continue_it_8f06d0cb": {
    "message": "Indhold er stadig ved at blive uploadet. Hvis du fortsætter, bliver det ikke integreret korrekt."
  },
  "content_subtype_5ce35e88": {
    "message": "Indholdsundertype"
  },
  "content_type_2cf90d95": {
    "message": "Indholdstype"
  },
  "copyright_holder_66ee111": {
    "message": "Rettighedshaver:"
  },
  "count_plural_0_0_words_one_1_word_other_words_acf32eca": {
    "message": "{ count, plural,\n     =0 {0 ord}\n    one {1 ord}\n  other {# ord}\n}"
  },
  "count_plural_one_item_loaded_other_items_loaded_857023b7": {
    "message": "{ count, plural,\n    one {# element indlæst}\n  other {# elementer indlæst}\n}"
  },
  "course_documents_104d76e0": {
    "message": "Fagdokumenter"
  },
  "course_files_62deb8f8": {
    "message": "Fagets filer"
  },
  "course_files_a31f97fc": {
    "message": "Fagets filer"
  },
  "course_images_f8511d04": {
    "message": "Fagbilleder"
  },
  "course_links_b56959b9": {
    "message": "Faglinks"
  },
  "course_media_ec759ad": {
    "message": "Fagmedier"
  },
  "course_navigation_dd035109": {
    "message": "Fagnavigation"
  },
  "create_button_and_icon_5c089934": {
    "message": "Opret knap og ikon"
  },
  "creative_commons_license_725584ae": {
    "message": "Creative Commons licens:"
  },
  "custom_6979cd81": {
    "message": "Brugerdefineret"
  },
  "date_added_ed5ad465": {
    "message": "Dato tilføjet"
  },
  "decorative_image_3c28aa7d": {
    "message": "Dekorativt billede"
  },
  "decrease_indent_de6343ab": {
    "message": "Formindsk indrykning"
  },
  "default_bulleted_unordered_list_47079da8": {
    "message": "standard punktliste usorteret liste"
  },
  "default_numerical_ordered_list_48dd3548": {
    "message": "standard numerisk sorteret liste"
  },
  "describe_the_image_e65d2e32": {
    "message": "(Beskriv billedet)"
  },
  "describe_the_video_2fe8f46a": {
    "message": "(Beskriv videoen)"
  },
  "details_98a31b68": {
    "message": "Nærmere oplysninger"
  },
  "dimensions_45ddb7b7": {
    "message": "Dimensioner"
  },
  "directionality_26ae9e08": {
    "message": "Retningsbestemthed"
  },
  "disable_in_line_preview_2a675175": {
    "message": "Deaktiver in-line forhåndsvisning."
  },
  "discussions_a5f96392": {
    "message": "Diskussioner"
  },
  "discussions_index_6c36ced": {
    "message": "Diskussionsoversigt"
  },
  "display_options_315aba85": {
    "message": "Visningsindstillinger"
  },
  "display_text_link_opens_in_a_new_tab_75e9afc9": {
    "message": "Vis tekstlink (åbnes i en ny fane)"
  },
  "document_678cd7bf": {
    "message": "Dokument"
  },
  "documents_81393201": {
    "message": "Dokumenter"
  },
  "done_54e3d4b6": {
    "message": "Udført"
  },
  "drag_a_file_here_1bf656d5": {
    "message": "Træk en fil her hen"
  },
  "drag_and_drop_or_click_to_browse_your_computer_60772d6d": {
    "message": "Træk og slip eller klik for at browse din computer"
  },
  "drag_handle_use_up_and_down_arrows_to_resize_e29eae5c": {
    "message": "Træk i håndtaget. Brug op- og ned-pilene til at ændre størrelse"
  },
  "due_multiple_dates_cc0ee3f5": {
    "message": "Forfalder: Flere datoer"
  },
  "due_when_7eed10c6": {
    "message": "Forfalder: { when }"
  },
  "edit_c5fbea07": {
    "message": "Redigér"
  },
  "edit_equation_f5279959": {
    "message": "Rediger ligning"
  },
  "edit_existing_button_icon_3d0277bd": {
    "message": "Rediger eksisterende knap/ikon"
  },
  "edit_link_7f53bebb": {
    "message": "Rediger link"
  },
  "editor_statusbar_26ac81fc": {
    "message": "Editor-statusbar"
  },
  "embed_828fac4a": {
    "message": "Indlejre"
  },
  "embed_code_314f1bd5": {
    "message": "Indlejr kode"
  },
  "embed_image_1080badc": {
    "message": "Integrer billede"
  },
  "embed_options_tray_901cfd19": {
    "message": "Bakke til indlejringsindstillinger"
  },
  "embed_preview_2d741e1f": {
    "message": "Indlejr forhåndsvisning"
  },
  "embed_video_a97a64af": {
    "message": "Indlejr video"
  },
  "embedded_content_aaeb4d3d": {
    "message": "indlejret indhold"
  },
  "enter_at_least_3_characters_to_search_4f037ee0": {
    "message": "Indtast mindst 3 tegn for at søge"
  },
  "equation_1c5ac93c": {
    "message": "Regnestykke"
  },
  "expand_preview_by_default_2abbf9f8": {
    "message": "Udvid forhåndsvisning som standard"
  },
  "expand_to_see_types_f5d29352": {
    "message": "Udvid for at se { types }"
  },
  "external_links_3d9f074e": {
    "message": "Eksterne links"
  },
  "external_tools_6e77821": {
    "message": "Eksterne værktøjer"
  },
  "extra_large_b6cdf1ff": {
    "message": "Ekstra stor"
  },
  "extra_small_9ae33252": {
    "message": "Ekstra lille"
  },
  "file_url_c12b64be": {
    "message": "Fil-URL"
  },
  "filename_file_icon_602eb5de": {
    "message": "{ filename } filikon"
  },
  "filename_image_preview_6cef8f26": {
    "message": "{ filename } billedets forhåndsvisning"
  },
  "filename_text_preview_e41ca2d8": {
    "message": "{ filename } tekstens forhåndsvisning"
  },
  "files_c300e900": {
    "message": "Filer"
  },
  "files_index_af7c662b": {
    "message": "Filoversigt"
  },
  "focus_element_options_toolbar_18d993e": {
    "message": "Værktøjslinje med indstillinger for fokuselement"
  },
  "folder_tree_fbab0726": {
    "message": "Mappetræ"
  },
  "format_4247a9c5": {
    "message": "Format"
  },
  "formatting_5b143aa8": {
    "message": "Formatering"
  },
  "found_auto_saved_content_3f6e4ca5": {
    "message": "Fundet automatisk gemt indhold"
  },
  "found_count_plural_0_results_one_result_other_resu_46aeaa01": {
    "message": "Fandt { count, plural,\n     =0 {# resultater}\n    one {# resultat}\n  other {# resultater}\n}"
  },
  "fullscreen_873bf53f": {
    "message": "Fuld skærm"
  },
  "generating_preview_45b53be0": {
    "message": "Genererer forhåndsvisning ..."
  },
  "go_to_the_editor_s_menubar_e6674c81": {
    "message": "Gå til redigerings-menulinjen"
  },
  "go_to_the_editor_s_toolbar_a5cb875f": {
    "message": "Gå til redigerings-værktøjslinjen"
  },
  "grades_a61eba0a": {
    "message": "Karakterer"
  },
  "group_documents_8bfd6ae6": {
    "message": "Gruppens dokumenter"
  },
  "group_files_4324f3df": {
    "message": "Gruppefiler"
  },
  "group_files_82e5dcdb": {
    "message": "Gruppefiler"
  },
  "group_images_98e0ac17": {
    "message": "Gruppens billeder"
  },
  "group_links_9493129e": {
    "message": "Gruppelinks"
  },
  "group_media_2f3d128a": {
    "message": "Gruppens medier"
  },
  "group_navigation_99f191a": {
    "message": "Gruppenavigation"
  },
  "heading_2_5b84eed2": {
    "message": "Overskrift 2"
  },
  "heading_3_2c83de44": {
    "message": "Overskrift 3"
  },
  "heading_4_b2e74be7": {
    "message": "Overskrift 4"
  },
  "height_69b03e15": {
    "message": "Højde"
  },
  "hexagon_d8468e0d": {
    "message": "Sekskant"
  },
  "hide_description_bfb5502e": {
    "message": "Skjul beskrivelse"
  },
  "hide_title_description_caf092ef": {
    "message": "Skjul { title } beskrivelse"
  },
  "home_351838cd": {
    "message": "Startside"
  },
  "html_code_editor_fd967a44": {
    "message": "html kode-editor"
  },
  "html_editor_fb2ab713": {
    "message": "HTML-editor"
  },
  "i_have_obtained_permission_to_use_this_file_6386f087": {
    "message": "Jeg har opnået tilladelse til at bruge denne fil."
  },
  "i_hold_the_copyright_71ee91b1": {
    "message": "Jeg er rettighedshaveren"
  },
  "if_you_do_not_select_usage_rights_now_this_file_wi_14e07ab5": {
    "message": "Hvis du ikke vælger brugsrettigheder nu, vil denne fil ikke blive offentliggjort, når den uploades."
  },
  "image_8ad06": {
    "message": "Billede"
  },
  "image_options_5412d02c": {
    "message": "Billedindstillinger"
  },
  "image_options_tray_90a46006": {
    "message": "Billedindstillinger-bakke"
  },
  "images_7ce26570": {
    "message": "Billeder"
  },
  "increase_indent_6d550a4a": {
    "message": "Øg indrykning"
  },
  "insert_593145ef": {
    "message": "Indsæt"
  },
  "insert_equella_links_49a8dacd": {
    "message": "Indsæt Equella-links"
  },
  "insert_link_6dc23cae": {
    "message": "Indsæt link"
  },
  "insert_math_equation_57c6e767": {
    "message": "Indsæt matematikregnestykke"
  },
  "invalid_file_c11ba11": {
    "message": "Ugyldig fil"
  },
  "invalid_file_type_881cc9b2": {
    "message": "Ugyldig filtype"
  },
  "invalid_url_cbde79f": {
    "message": "Ugyldig URL"
  },
  "keyboard_shortcuts_ed1844bd": {
    "message": "Genvejstaster"
  },
  "large_9c5e80e7": {
    "message": "Stor"
  },
  "left_to_right_e9b4fd06": {
    "message": "Venstre til højre"
  },
  "link_7262adec": {
    "message": "Link"
  },
  "link_options_a16b758b": {
    "message": "Link-muligheder"
  },
  "links_14b70841": {
    "message": "Links"
  },
  "load_more_35d33c7": {
    "message": "Indlæs flere"
  },
  "load_more_results_460f49a9": {
    "message": "Indlæs flere resultater"
  },
  "loading_25990131": {
    "message": "Indlæser ..."
  },
  "loading_bde52856": {
    "message": "Indlæser"
  },
  "loading_failed_b3524381": {
    "message": "Indlæsning mislykkedes ..."
  },
  "loading_failed_e6a9d8ef": {
    "message": "Indlæsning mislykkedes."
  },
  "loading_folders_d8b5869e": {
    "message": "Indlæser mapper"
  },
  "loading_please_wait_d276220a": {
    "message": "Indlæser, vent venligst"
  },
  "locked_762f138b": {
    "message": "Låst"
  },
  "media_af190855": {
    "message": "Medier"
  },
  "medium_5a8e9ead": {
    "message": "Medium"
  },
  "middle_27dc1d5": {
    "message": "I midten"
  },
  "miscellaneous_e9818229": {
    "message": "Diverse"
  },
  "modules_c4325335": {
    "message": "Moduler"
  },
  "must_be_at_least_width_x_height_px_41dc825e": {
    "message": "Skal være mindst { width } x { height } px"
  },
  "my_files_2f621040": {
    "message": "Mine filer"
  },
  "my_images_427f9b0c": {
    "message": "Mine billeder"
  },
  "name_1aed4a1b": {
    "message": "Navn"
  },
  "navigate_through_the_menu_or_toolbar_415a4e50": {
    "message": "Naviger gennem menuen eller værktøjslinjen"
  },
  "next_page_d2a39853": {
    "message": "Næste side"
  },
  "no_e16d9132": {
    "message": "Nej"
  },
  "no_file_chosen_9a880793": {
    "message": "Ingen fil valgt"
  },
  "no_preview_is_available_for_this_file_f940114a": {
    "message": "Der findes ikke forhåndsvisning for denne fil."
  },
  "no_results_940393cf": {
    "message": "Ingen resultater."
  },
  "no_results_found_for_filterterm_ad1b04c8": {
    "message": "Ingen resultater fundet for { filterTerm }"
  },
  "no_results_found_for_term_1564c08e": {
    "message": "Der blev ikke fundet nogen resultater for { term }."
  },
  "none_3b5e34d2": {
    "message": "Ingen"
  },
  "octagon_e48be9f": {
    "message": "Octagon"
  },
  "open_this_keyboard_shortcuts_dialog_9658b83a": {
    "message": "Åbn dialogen for denne genvejstast"
  },
  "open_title_application_fd624fc5": {
    "message": "Åbn { title } applikation"
  },
  "options_3ab0ea65": {
    "message": "Muligheder"
  },
  "ordered_and_unordered_lists_cfadfc38": {
    "message": "Sorterede og usorterede lister"
  },
  "other_editor_shortcuts_may_be_found_at_404aba4a": {
    "message": "Andre redigeringsgenveje kan findes på"
  },
  "p_is_not_a_valid_protocol_which_must_be_ftp_http_h_adf13fc2": {
    "message": "{ p } er ikke en gyldig protokol. Den skal være ftp, http, https, mailto, skype, tel eller kan udelades"
  },
  "pages_e5414c2c": {
    "message": "Sider"
  },
  "paragraph_5e5ad8eb": {
    "message": "Paragraf"
  },
  "people_b4ebb13c": {
    "message": "Deltagere"
  },
  "posted_when_a578f5ab": {
    "message": "Slået op: { when }"
  },
  "preformatted_d0670862": {
    "message": "Præformatteret"
  },
  "pretty_html_editor_28748756": {
    "message": "Pænt HTML-redigeringsværktøj"
  },
  "preview_53003fd2": {
    "message": "Eksempel"
  },
  "preview_in_overlay_ed772c46": {
    "message": "Overlejret forhåndsvisning"
  },
  "preview_inline_9787330": {
    "message": "Indbygget forhåndsvisning"
  },
  "previous_page_928fc112": {
    "message": "Forrige side"
  },
  "protocol_must_be_ftp_http_https_mailto_skype_tel_o_73beb4f8": {
    "message": "Protokollen skal være ftp, http, https, mailto, skype, tel eller kan udelades"
  },
  "published_c944a23d": {
    "message": "Offentliggjort"
  },
  "published_when_302d8e23": {
    "message": "Offentliggjort: { when }"
  },
  "quizzes_7e598f57": {
    "message": "Test"
  },
  "raw_html_editor_e3993e41": {
    "message": "Rå HTML-editor"
  },
  "record_7c9448b": {
    "message": "Optag"
  },
  "record_upload_media_5fdce166": {
    "message": "Optag/overfør medier"
  },
  "remove_link_d1f2f4d0": {
    "message": "Fjern link"
  },
  "resize_ec83d538": {
    "message": "Tilpas størrelse"
  },
  "restore_auto_save_deccd84b": {
    "message": "Gendan automatisk gemt indhold?"
  },
  "rich_content_editor_2708ef21": {
    "message": "Rich Content Editor"
  },
  "right_to_left_9cfb092a": {
    "message": "Højre mod venstre"
  },
  "sadly_the_pretty_html_editor_is_not_keyboard_acces_50da7665": {
    "message": "Desværre er det pæne HTML-redigeringsværktøj ikke tilgængeligt på tastaturet. Få adgang til det rå HTML-redigeringsværktøj her."
  },
  "save_11a80ec3": {
    "message": "Gem"
  },
  "saved_buttons_and_icons_8278eed2": {
    "message": "Gemte knapper og ikoner"
  },
  "search_280d00bd": {
    "message": "Søg"
  },
  "search_term_b2d2235": {
    "message": "Søgeord"
  },
  "select_language_7c93a900": {
    "message": "Vælg sprog"
  },
  "selected_274ce24f": {
    "message": "Valgt"
  },
  "shift_o_to_open_the_pretty_html_editor_55ff5a31": {
    "message": "Shift-O for at åbne det pæne html-redigeringsværktøj."
  },
  "show_embed_options_ef8d7ef": {
    "message": "Vis indlejringsindstillinger"
  },
  "show_image_options_1e2ecc6b": {
    "message": "Vis billedindstillinger"
  },
  "show_link_options_545338fd": {
    "message": "Vis linkindstillinger"
  },
  "show_video_options_6ed3721a": {
    "message": "Vis videoindstillinger"
  },
  "size_b30e1077": {
    "message": "Størrelse"
  },
  "size_of_file_is_greater_than_the_maximum_max_mb_al_6eb3fa9a": {
    "message": "Størrelsen på { file } er større end maks. { max } MB tilladte filstørrelse."
  },
  "small_b070434a": {
    "message": "Lille"
  },
  "something_went_wrong_89195131": {
    "message": "Noget gik galt."
  },
  "something_went_wrong_and_i_don_t_know_what_to_show_e0c54ec8": {
    "message": "Der gik noget galt, og jeg ved ikke, hvad jeg skal vise dig."
  },
  "something_went_wrong_check_your_connection_and_try_2a7b2d13": {
    "message": "Der gik noget galt, kontrollér din forbindelse og prøv igen."
  },
  "something_went_wrong_d238c551": {
    "message": "Noget gik galt"
  },
  "something_went_wrong_try_again_after_refreshing_th_e094eb8d": {
    "message": "Der gik noget galt, opdater siden og prøv igen"
  },
  "something_went_wrong_uploading_check_your_connecti_aa201f15": {
    "message": "Der gik noget galt med uploaden, kontrollér din forbindelse og prøv igen."
  },
  "sort_by_e75f9e3e": {
    "message": "Sorter efter"
  },
  "square_511eb3b3": {
    "message": "Kvadrat"
  },
  "square_unordered_list_b15ce93b": {
    "message": "firkantet usorteret liste"
  },
  "star_8d156e09": {
    "message": "Stjerne"
  },
  "styles_2aa721ef": {
    "message": "Stile"
  },
  "submit_a3cc6859": {
    "message": "Aflever"
  },
  "subscript_59744f96": {
    "message": "Sænket skrift"
  },
  "superscript_8cb349a2": {
    "message": "Hævet skrift"
  },
  "supported_file_types_srt_or_webvtt_7d827ed": {
    "message": "Understøttede filtyper: SRT eller WebVTT"
  },
  "switch_to_the_html_editor_146dfffd": {
    "message": "Skift til det rå html-redigeringsværktøj"
  },
  "switch_to_the_rich_text_editor_63c1ecf6": {
    "message": "Skift til Rich Text Editor"
  },
  "syllabus_f191f65b": {
    "message": "Læseplan"
  },
  "tab_arrows_4cf5abfc": {
    "message": "TAB / pile"
  },
  "text_7f4593da": {
    "message": "Tekst"
  },
  "text_background_color_16e61c3f": {
    "message": "Tekstens baggrundsfarve"
  },
  "text_color_acf75eb6": {
    "message": "Tekstfarve"
  },
  "text_position_8df8c162": {
    "message": "Tekstposition"
  },
  "text_size_887c2f6": {
    "message": "Tekststørrelse"
  },
  "the_material_is_in_the_public_domain_279c39a3": {
    "message": "Materialer er på det offentlige domæne"
  },
  "the_material_is_licensed_under_creative_commons_3242cb5e": {
    "message": "Materialet licenseres under Creative Commons"
  },
  "the_material_is_subject_to_an_exception_e_g_fair_u_a39c8ca2": {
    "message": "Materialet er underlagt en undtagelse - fx fair brug, retten til at citere eller andre i henhold til gældende copyright-love"
  },
  "the_pretty_html_editor_is_not_keyboard_accessible__d6d5d2b": {
    "message": "Det pæne html-redigeringsværktøj er ikke tilgængeligt på tastaturet. Tryk på Shift-O for at åbne det rå html-redigeringsværktøj."
  },
  "though_your_video_will_have_the_correct_title_in_t_90e427f3": {
    "message": "Selvom din video har den rigtige titel i browseren, kunne vi ikke opdatere den i databasen."
  },
  "title_ee03d132": {
    "message": "Titel"
  },
  "to_be_posted_when_d24bf7dc": {
    "message": "Skal slås op: { when }"
  },
  "to_do_when_2783d78f": {
    "message": "Opgaveliste: { when }"
  },
  "toggle_summary_group_413df9ac": {
    "message": "Skift { summary } gruppe"
  },
  "tools_2fcf772e": {
    "message": "Værktøjer"
  },
  "totalresults_results_found_numdisplayed_results_cu_a0a44975": {
    "message": "{ totalResults } fundne resultater, { numDisplayed } resultater vises i øjeblikket"
  },
  "tray_839df38a": {
    "message": "Bakke"
  },
  "triangle_6072304e": {
    "message": "Trekant"
  },
  "type_control_f9_to_access_image_options_text_a47e319f": {
    "message": "tryk Ctrl + F9 for at få adgang til billedindstillinger. { text }"
  },
  "type_control_f9_to_access_link_options_text_4ead9682": {
    "message": "tryk Ctrl + F9 for at få adgang til linkindstillinger. { text }"
  },
  "type_control_f9_to_access_table_options_text_92141329": {
    "message": "tryk Ctrl + F9 for at få adgang til tabelindstillinger. { text }"
  },
  "unpublished_dfd8801": {
    "message": "Ikke offentliggjort"
  },
  "untitled_efdc2d7d": {
    "message": "uden titel"
  },
  "upload_document_253f0478": {
    "message": "Upload dokument"
  },
  "upload_file_fd2361b8": {
    "message": "Overfør fil"
  },
  "upload_image_6120b609": {
    "message": "Upload billede"
  },
  "upload_media_ce31135a": {
    "message": "Upload medier"
  },
  "upload_record_media_e4207d72": {
    "message": "Upload / optag medier"
  },
  "uploading_19e8a4e7": {
    "message": "Uploader"
  },
  "uploading_closed_captions_subtitles_failed_bc093f3": {
    "message": "Upload af undertekster mislykkedes."
  },
  "uppercase_alphabetic_ordered_list_3f5aa6b2": {
    "message": "store bogstaver alfabetisk sorteret liste"
  },
  "uppercase_roman_numeral_ordered_list_853f292b": {
    "message": "store bogstaver romertal sorteret liste"
  },
  "url_22a5f3b8": {
    "message": "URL"
  },
  "usage_right_ff96f3e2": {
    "message": "Brugsrettigheder:"
  },
  "usage_rights_required_5fe4dd68": {
    "message": "Brugsrettigheder (påkrævet)"
  },
  "use_arrow_keys_to_navigate_options_2021cc50": {
    "message": "Brug piletasterne til at navigere indstillinger."
  },
  "use_arrow_keys_to_select_a_shape_c8eb57ed": {
    "message": "Brug piletasterne til at vælge en form."
  },
  "use_arrow_keys_to_select_a_size_699a19f4": {
    "message": "Brug piletasterne til at vælge en størrelse."
  },
  "use_arrow_keys_to_select_a_text_position_72f9137c": {
    "message": "Brug piletasterne til at vælge en tekstposition."
  },
  "use_arrow_keys_to_select_a_text_size_65e89336": {
    "message": "Brug piletasterne til at vælge en tekststørrelse."
  },
  "use_arrow_keys_to_select_an_outline_size_e009d6b0": {
    "message": "Brug piletasterne til at vælge en konturstørrelse."
  },
  "used_by_screen_readers_to_describe_the_content_of__b1e76d9e": {
    "message": "Bruges af skærmlæsere til at beskrive et billedes indhold"
  },
  "used_by_screen_readers_to_describe_the_video_37ebad25": {
    "message": "Bruges af skærmlæsere til at beskrive videoen"
  },
  "user_documents_c206e61f": {
    "message": "Brugerdokumenter"
  },
  "user_files_78e21703": {
    "message": "Brugerfiler"
  },
  "user_images_b6490852": {
    "message": "Brugerbilleder"
  },
  "user_media_14fbf656": {
    "message": "Brugermedier"
  },
  "video_options_24ef6e5d": {
    "message": "Videoindstillinger"
  },
  "video_options_tray_3b9809a5": {
    "message": "Bakke for videoindstillinger"
  },
  "video_player_for_9e7d373b": {
    "message": "Videoafspiller til "
  },
  "video_player_for_title_ffd9fbc4": {
    "message": "Videoafspiller til { title }"
  },
  "view_ba339f93": {
    "message": "Vis"
  },
  "view_description_30446afc": {
    "message": "Vis beskrivelse"
  },
  "view_keyboard_shortcuts_34d1be0b": {
    "message": "Se tastaturgenveje"
  },
  "view_predefined_colors_92f5db39": {
    "message": "Se foruddefinerede farver"
  },
  "view_title_description_67940918": {
    "message": "Vis { title } beskrivelse"
  },
  "width_492fec76": {
    "message": "Bredde"
  },
  "width_and_height_must_be_numbers_110ab2e3": {
    "message": "Bredde og højde skal være tal"
  },
  "width_x_height_px_ff3ccb93": {
    "message": "{ width } x { height } px"
  },
  "wiki_home_9cd54d0": {
    "message": "Wiki startside"
  },
  "yes_dde87d5": {
    "message": "Ja"
  },
  "you_may_not_upload_an_empty_file_11c31eb2": {
    "message": "Du må ikke uploade en tom fil."
  }
};
formatMessage.addLocale({
  da: locale
});