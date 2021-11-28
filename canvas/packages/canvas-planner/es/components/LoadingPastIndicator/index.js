/*
 * Copyright (C) 2017 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that they will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from '@instructure/ui-view';
import { Text } from '@instructure/ui-text';
import { Spinner } from '@instructure/ui-spinner';
import ErrorAlert from '../ErrorAlert';
import formatMessage from '../../format-message';

var TV = function TV(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("title", null, "Group"), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    d: "M22.825.626c-5.66.289-11.32.656-16.981 1.101-1.655.131-3.16 1.588-3.347 3.242a360.003 360.003 0 0 0-1.313 65.64h21.64V.626z",
    id: "a"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.184 70.61A360.003 360.003 0 0 1 2.497 4.968c.187-1.654 1.692-3.111 3.347-3.242 5.66-.445 11.32-.812 16.98-1.101v69.983H1.185z",
    id: "c"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.825 20.315c-5.66-.29-11.32-.657-16.981-1.102-1.655-.132-3.16-1.588-3.347-3.243A363.483 363.483 0 0 1 .13.843h21.695v19.472z",
    id: "e"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.13.843C.48 5.885.935 10.928 1.497 15.97c.187 1.655 1.692 3.111 3.347 3.243 5.66.445 11.32.812 16.981 1.102V.843H.13z",
    id: "g"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.322 1.704A618.04 618.04 0 0 1 22.923.908v71.083H.323V1.704z",
    id: "i"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.923.908a618.04 618.04 0 0 0-22.6.796v70.287h22.6V.908z",
    id: "k"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.923 20.032A617.82 617.82 0 0 1 .8 19.262V.609h22.122v19.423z",
    id: "m"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.8 19.262c7.375.389 14.749.646 22.123.77V.61H.8v18.653z",
    id: "o"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.427.917A616.582 616.582 0 0 1 22.529.92v71.117H.427V.917z",
    id: "q"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.53.921A616.644 616.644 0 0 0 .426.917v71.12h22.102V.922z",
    id: "s"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.367 20.022c-7.26.13-14.522.131-21.783.004V.99h21.784v19.033z",
    id: "u"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.585 20.026c7.26.127 14.521.126 21.783-.004V.989H.584v19.037z",
    id: "w"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.764.908a618.06 618.06 0 0 1 22.6.796v70.287H.765V.908z",
    id: "y"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.365 1.704A618.078 618.078 0 0 0 .764.908v71.083h22.6V1.704z",
    id: "A"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.885 19.262c-7.374.389-14.748.646-22.122.77V.61h22.122v18.653z",
    id: "C"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.763 20.032a617.846 617.846 0 0 0 22.122-.77V.609H.763v19.423z",
    id: "E"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.862.626c5.66.289 11.321.656 16.982 1.101 1.654.131 3.16 1.588 3.346 3.242a360.003 360.003 0 0 1 1.313 65.64H.862V.627z",
    id: "G"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.503 70.61A360.003 360.003 0 0 0 21.19 4.969c-.186-1.654-1.692-3.111-3.346-3.242A621.172 621.172 0 0 0 .862.626V70.61h21.64z",
    id: "I"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.557.843A363.483 363.483 0 0 1 21.19 15.97c-.186 1.655-1.692 3.111-3.346 3.243A620.62 620.62 0 0 1 .862 20.315V.843h21.695z",
    id: "K"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.862 20.315a620.62 620.62 0 0 0 16.982-1.102c1.654-.132 3.16-1.588 3.346-3.243A363.483 363.483 0 0 0 22.557.843H.862v19.472z",
    id: "M"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M45.69 4.085l99.153 26.003",
    stroke: "#798792",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44.842 8.137a4.136 4.136 0 1 1 2.099-8 4.136 4.136 0 0 1-2.1 8z",
    fill: "#798792"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M158.684 41.088c0 13.276-10.763 24.039-24.04 24.039-13.275 0-24.038-10.763-24.038-24.04 0-13.275 10.763-24.038 24.039-24.038 13.276 0 24.039 10.763 24.039 24.039",
    fill: "#C0C6CB"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M158.684 41.088c0 13.276-10.763 24.039-24.04 24.039-13.275 0-24.038-10.763-24.038-24.04 0-13.275 10.763-24.038 24.039-24.038 13.276 0 24.039 10.763 24.039 24.039z",
    stroke: "#798792",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#C0C6CB",
    d: "M14.448 155.088h144.396v-21H14.448z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#798792",
    strokeWidth: "2",
    d: "M14.448 155.088h144.396v-21H14.448z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M164.844 143.351a1209.137 1209.137 0 0 1-155 0c-2.206-.144-4.266-2.057-4.571-4.264-4.672-34-4.672-68 0-102 .305-2.207 2.365-4.119 4.57-4.263a1208.773 1208.773 0 0 1 155 0c2.206.143 4.266 2.056 4.572 4.263 4.672 34 4.672 68 0 102-.306 2.207-2.365 4.12-4.571 4.264",
    fill: "#F4F5F6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M164.844 143.351a1209.137 1209.137 0 0 1-155 0c-2.206-.144-4.266-2.057-4.571-4.264-4.672-34-4.672-68 0-102 .305-2.207 2.365-4.119 4.57-4.263a1208.773 1208.773 0 0 1 155 0c2.206.143 4.266 2.056 4.572 4.263 4.672 34 4.672 68 0 102-.306 2.207-2.365 4.12-4.571 4.264z",
    stroke: "#778690",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M116.844 132.41a627.204 627.204 0 0 1-97 0c-2.205-.174-4.213-2.116-4.456-4.322a369.79 369.79 0 0 1 0-80c.243-2.206 2.25-4.149 4.456-4.323a627.453 627.453 0 0 1 97 0c2.205.174 4.212 2.118 4.455 4.323a369.79 369.79 0 0 1 0 80c-.243 2.206-2.25 4.148-4.455 4.322",
    fill: "#F4F5F6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M116.844 132.41a627.204 627.204 0 0 1-97 0c-2.205-.174-4.213-2.116-4.456-4.322a369.79 369.79 0 0 1 0-80c.243-2.206 2.25-4.149 4.456-4.323a627.453 627.453 0 0 1 97 0c2.205.174 4.212 2.118 4.455 4.323a369.79 369.79 0 0 1 0 80c-.243 2.206-2.25 4.148-4.455 4.322z",
    stroke: "#778690",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M162.844 63.588c0 8.008-6.492 14.5-14.5 14.5-8.01 0-14.5-6.492-14.5-14.5s6.49-14.5 14.5-14.5c8.008 0 14.5 6.492 14.5 14.5",
    fill: "#75848F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M162.844 63.588c0 8.008-6.492 14.5-14.5 14.5-8.01 0-14.5-6.492-14.5-14.5s6.49-14.5 14.5-14.5c8.008 0 14.5 6.492 14.5 14.5z",
    stroke: "#3F5463",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M151.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0",
    fill: "#75848F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M151.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z",
    stroke: "#3F5463",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M140.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0",
    fill: "#75848F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M140.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z",
    stroke: "#3F5463",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M162.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0",
    fill: "#75848F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M162.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-26.693-18.833l18.842-18.103m-13.299 23.871l18.841-18.103",
    stroke: "#3F5463",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M133.844 100.328h29m-29 5h29m-29 5h29m-29 5h29",
    stroke: "#3F5463",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(14 43.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "b",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#a"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M21.8 70.61a1227.73 1227.73 0 0 1-21.782-.768A388.062 388.062 0 0 1 1.728.888 657.433 657.433 0 0 1 22.826-.47 687.486 687.486 0 0 0 21.8 70.61",
    fill: "#95D4F5",
    mask: "url(#b)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(14 43.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "d",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#c"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M21.8 70.61a1227.73 1227.73 0 0 1-21.782-.768A388.062 388.062 0 0 1 1.728.888 657.433 657.433 0 0 1 22.826-.47 687.486 687.486 0 0 0 21.8 70.61z",
    stroke: "#6D7A82",
    strokeWidth: "2",
    strokeLinecap: "round",
    mask: "url(#d)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(15 112.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "f",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#e"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M21.825 21.41A660.962 660.962 0 0 1 .728 20.051 390.33 390.33 0 0 1-.982.843c7.26.32 14.522.575 21.783.766.246 6.6.587 13.2 1.024 19.8",
    fill: "#E8ACDD",
    mask: "url(#f)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(15 112.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "h",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#g"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M21.825 21.41A660.962 660.962 0 0 1 .728 20.051 390.33 390.33 0 0 1-.982.843c7.26.32 14.522.575 21.783.766.246 6.6.587 13.2 1.024 19.8z",
    stroke: "#6D7A82",
    strokeWidth: "2",
    strokeLinecap: "round",
    mask: "url(#h)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(35 42.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "j",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#i"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22.585 71.991c-7.262-.063-14.522-.19-21.784-.382A687.486 687.486 0 0 1 1.825.53C8.856.19 15.89-.035 22.923-.148a2139.173 2139.173 0 0 0-.338 72.14",
    fill: "#94E09E",
    mask: "url(#j)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(35 42.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "l",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#k"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22.585 71.991c-7.262-.063-14.522-.19-21.784-.382A687.486 687.486 0 0 1 1.825.53C8.856.19 15.89-.035 22.923-.148a2139.173 2139.173 0 0 0-.338 72.14z",
    stroke: "#6D7A82",
    strokeWidth: "2",
    strokeLinecap: "round",
    mask: "url(#l)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(35 113.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "n",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#m"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22.923 21.087a651.911 651.911 0 0 1-21.098-.678c-.436-6.6-.778-13.2-1.024-19.8C8.063.8 15.323.928 22.585.99c.08 6.699.194 13.398.338 20.096",
    fill: "#FEC19B",
    mask: "url(#n)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(35 113.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "p",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#o"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22.923 21.087a651.911 651.911 0 0 1-21.098-.678c-.436-6.6-.778-13.2-1.024-19.8C8.063.8 15.323.928 22.585.99c.08 6.699.194 13.398.338 20.096z",
    stroke: "#6D7A82",
    strokeWidth: "2",
    strokeLinecap: "round",
    mask: "url(#p)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(57 42.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "r",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#q"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22.367 71.99c-7.26.063-14.52.064-21.782.001C.292 47.945.405 23.9.923-.148c7.032-.112 14.064-.11 21.097.005.531 24.044.646 48.088.347 72.132",
    fill: "#F9979A",
    mask: "url(#r)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(57 42.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "t",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#s"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22.367 71.99c-7.26.063-14.52.064-21.782.001C.292 47.945.405 23.9.923-.148c7.032-.112 14.064-.11 21.097.005.531 24.044.646 48.088.347 72.132z",
    stroke: "#6D7A82",
    strokeWidth: "2",
    strokeLinecap: "round",
    mask: "url(#t)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(57 113.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "v",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#u"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22.02 21.083a656.57 656.57 0 0 1-21.098.004A2244.57 2244.57 0 0 1 .584.991c7.261.064 14.523.063 21.784-.002-.084 6.698-.2 13.396-.348 20.094",
    fill: "#95D4F5",
    mask: "url(#v)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(57 113.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "x",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#w"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22.02 21.083a656.57 656.57 0 0 1-21.098.004A2244.57 2244.57 0 0 1 .584.991c7.261.064 14.523.063 21.784-.002-.084 6.698-.2 13.396-.348 20.094z",
    stroke: "#6D7A82",
    strokeWidth: "2",
    strokeLinecap: "round",
    mask: "url(#x)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(78 42.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "z",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#y"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22.886 71.61c-7.261.19-14.521.317-21.783.381.292-24.046.179-48.092-.34-72.139 7.034.112 14.067.338 21.1.678a687.766 687.766 0 0 1 1.023 71.08",
    fill: "#FEC19B",
    mask: "url(#z)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(78 42.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "B",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#A"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22.886 71.61c-7.261.19-14.521.317-21.783.381.292-24.046.179-48.092-.34-72.139 7.034.112 14.067.338 21.1.678a687.766 687.766 0 0 1 1.023 71.08z",
    stroke: "#6D7A82",
    strokeWidth: "2",
    strokeLinecap: "round",
    mask: "url(#B)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(78 113.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "D",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#C"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M21.862 20.41c-7.032.34-14.065.564-21.099.677.145-6.699.258-13.398.34-20.096C8.363.928 15.624.801 22.884.61c-.245 6.6-.586 13.2-1.023 19.8",
    fill: "#F9979A",
    mask: "url(#D)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(78 113.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "F",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#E"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M21.862 20.41c-7.032.34-14.065.564-21.099.677.145-6.699.258-13.398.34-20.096C8.363.928 15.624.801 22.884.61c-.245 6.6-.586 13.2-1.023 19.8z",
    stroke: "#6D7A82",
    strokeWidth: "2",
    strokeLinecap: "round",
    mask: "url(#F)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(99 43.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "H",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#G"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M23.67 69.843c-7.261.319-14.522.575-21.784.767A686.946 686.946 0 0 0 .862-.47C7.895-.131 14.926.322 21.959.889a388.06 388.06 0 0 1 1.71 68.954",
    fill: "#E8ACDD",
    mask: "url(#H)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(99 43.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "J",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#I"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M23.67 69.843c-7.261.319-14.522.575-21.784.767A686.946 686.946 0 0 0 .862-.47C7.895-.131 14.926.322 21.959.889a388.06 388.06 0 0 1 1.71 68.954z",
    stroke: "#6D7A82",
    strokeWidth: "2",
    strokeLinecap: "round",
    mask: "url(#J)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(99 112.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "L",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#K"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M21.959 20.052A657.303 657.303 0 0 1 .862 21.409c.437-6.6.779-13.2 1.024-19.8A1247.86 1247.86 0 0 0 23.67.844a391.449 391.449 0 0 1-1.711 19.209",
    fill: "#94E09E",
    mask: "url(#L)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(99 112.118)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "N",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#M"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M21.959 20.052A657.303 657.303 0 0 1 .862 21.409c.437-6.6.779-13.2 1.024-19.8A1247.86 1247.86 0 0 0 23.67.844a391.449 391.449 0 0 1-1.711 19.209z",
    stroke: "#6D7A82",
    strokeWidth: "2",
    strokeLinecap: "round",
    mask: "url(#N)"
  }))));
};

TV.defaultProps = {
  width: "174",
  height: "157",
  viewBox: "0 0 174 157",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink"
};
export default class LoadingPastIndicator extends Component {
  // Don't try to animate this component here. If we want this to animate, it should be coordinated
  // with other animations in the dynamic ui manager.
  renderError() {
    if (this.props.loadingError) {
      // Show an Alert for the user, while including the underlying root cause error
      // in a hidden div in case we need to know what it was
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: '50%',
          margin: '0 auto'
        }
      }, /*#__PURE__*/React.createElement(ErrorAlert, {
        error: this.props.loadingError
      }, formatMessage('Error loading past items')));
    }
  }

  renderNoMore() {
    if (this.props.allPastItemsLoaded) {
      return /*#__PURE__*/React.createElement(View, {
        as: "div",
        padding: "small",
        textAlign: "center"
      }, /*#__PURE__*/React.createElement(View, {
        display: "block",
        margin: "small"
      }, /*#__PURE__*/React.createElement(TV, {
        role: "img",
        "aria-hidden": "true"
      })), /*#__PURE__*/React.createElement(Text, {
        size: "large",
        as: "div"
      }, formatMessage('Beginning of Your To-Do History')), /*#__PURE__*/React.createElement(Text, {
        size: "medium",
        as: "div"
      }, formatMessage("You've scrolled back to your very first To-Do!")));
    }
  }

  renderLoading() {
    if (this.props.loadingPast && !this.props.allPastItemsLoaded) {
      return /*#__PURE__*/React.createElement(View, {
        as: "div",
        padding: "medium small small small",
        textAlign: "center"
      }, /*#__PURE__*/React.createElement(Spinner, {
        size: "small",
        margin: "0 x-small 0 0",
        renderTitle: () => formatMessage('Loading past items')
      }), /*#__PURE__*/React.createElement(Text, {
        size: "small",
        color: "secondary"
      }, formatMessage('Loading past items')));
    }
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      ref: elt => {
        this.rootDiv = elt;
      }
    }, this.renderError(), this.renderNoMore(), this.renderLoading());
  }

}
LoadingPastIndicator.propTypes = {
  loadingPast: PropTypes.bool,
  // actively loading?
  allPastItemsLoaded: PropTypes.bool,
  // there are no more?
  loadingError: PropTypes.string // message if there was an error attempting to loaad items

};
LoadingPastIndicator.defaultProps = {
  loadingPast: false,
  allPastItemsLoaded: false,
  loadingError: void 0
};