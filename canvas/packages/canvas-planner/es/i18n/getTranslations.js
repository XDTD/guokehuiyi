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

/* eslint-disable import/no-extraneous-dependencies */

/*
 * ********************************************************
 * This file is generated by scripts/generateGetTranslations.js
 * as part of the build. DO NOT EDIT
 * ********************************************************
 */
export default function getTranslations(locale) {
  const transReadyPromise = new Promise((resolve, reject) => {
    let p;

    switch (locale) {
      case 'ar':
        p = import('@instructure/translations/lib/canvas-planner/ar.json');
        break;

      case 'ca':
        p = import('@instructure/translations/lib/canvas-planner/ca.json');
        break;

      case 'cy':
        p = import('@instructure/translations/lib/canvas-planner/cy.json');
        break;

      case 'da':
        p = import('@instructure/translations/lib/canvas-planner/da.json');
        break;

      case 'da-x-k12':
        p = import('@instructure/translations/lib/canvas-planner/da-x-k12.json');
        break;

      case 'de':
        p = import('@instructure/translations/lib/canvas-planner/de.json');
        break;

      case 'el':
        p = import('@instructure/translations/lib/canvas-planner/el.json');
        break;

      case 'en':
        p = Promise.resolve(null);
        break;

      case 'en-AU-x-unimelb':
        p = import('@instructure/translations/lib/canvas-planner/en-AU-x-unimelb.json');
        break;

      case 'en-AU':
        p = import('@instructure/translations/lib/canvas-planner/en_AU.json');
        break;

      case 'en-CA':
        p = import('@instructure/translations/lib/canvas-planner/en_CA.json');
        break;

      case 'en-CY':
        p = import('@instructure/translations/lib/canvas-planner/en_CY.json');
        break;

      case 'en-GB':
        p = import('@instructure/translations/lib/canvas-planner/en_GB.json');
        break;

      case 'es':
        p = import('@instructure/translations/lib/canvas-planner/es.json');
        break;

      case 'fa-IR':
        p = import('@instructure/translations/lib/canvas-planner/fa_IR.json');
        break;

      case 'fi':
        p = import('@instructure/translations/lib/canvas-planner/fi.json');
        break;

      case 'fr':
        p = import('@instructure/translations/lib/canvas-planner/fr.json');
        break;

      case 'fr-CA':
        p = import('@instructure/translations/lib/canvas-planner/fr_CA.json');
        break;

      case 'he':
        p = import('@instructure/translations/lib/canvas-planner/he.json');
        break;

      case 'ht':
        p = import('@instructure/translations/lib/canvas-planner/ht.json');
        break;

      case 'hu':
        p = import('@instructure/translations/lib/canvas-planner/hu.json');
        break;

      case 'hy':
        p = import('@instructure/translations/lib/canvas-planner/hy.json');
        break;

      case 'is':
        p = import('@instructure/translations/lib/canvas-planner/is.json');
        break;

      case 'it':
        p = import('@instructure/translations/lib/canvas-planner/it.json');
        break;

      case 'ja':
        p = import('@instructure/translations/lib/canvas-planner/ja.json');
        break;

      case 'ko':
        p = import('@instructure/translations/lib/canvas-planner/ko.json');
        break;

      case 'mi':
        p = import('@instructure/translations/lib/canvas-planner/mi.json');
        break;

      case 'nb':
        p = import('@instructure/translations/lib/canvas-planner/nb.json');
        break;

      case 'nb-x-k12':
        p = import('@instructure/translations/lib/canvas-planner/nb-x-k12.json');
        break;

      case 'nl':
        p = import('@instructure/translations/lib/canvas-planner/nl.json');
        break;

      case 'nn':
        p = import('@instructure/translations/lib/canvas-planner/nn.json');
        break;

      case 'pl':
        p = import('@instructure/translations/lib/canvas-planner/pl.json');
        break;

      case 'pt':
        p = import('@instructure/translations/lib/canvas-planner/pt.json');
        break;

      case 'pt-BR':
        p = import('@instructure/translations/lib/canvas-planner/pt_BR.json');
        break;

      case 'ru':
        p = import('@instructure/translations/lib/canvas-planner/ru.json');
        break;

      case 'se':
        p = import('@instructure/translations/lib/canvas-planner/se.json');
        break;

      case 'sl':
        p = import('@instructure/translations/lib/canvas-planner/sl.json');
        break;

      case 'sv':
        p = import('@instructure/translations/lib/canvas-planner/sv.json');
        break;

      case 'sv-x-k12':
        p = import('@instructure/translations/lib/canvas-planner/sv-x-k12.json');
        break;

      case 'th':
        p = import('@instructure/translations/lib/canvas-planner/th.json');
        break;

      case 'tr':
        p = import('@instructure/translations/lib/canvas-planner/tr.json');
        break;

      case 'uk-UA':
        p = import('@instructure/translations/lib/canvas-planner/uk_UA.json');
        break;

      case 'zh':
        p = import('@instructure/translations/lib/canvas-planner/zh.json');
        break;

      case 'zh-HK':
        p = import('@instructure/translations/lib/canvas-planner/zh_HK.json');
        break;

      default:
        p = Promise.resolve(null);
    }

    p.then(resolve).catch(reject);
  }).catch(ex => {
    throw ex;
  });
  return transReadyPromise;
}