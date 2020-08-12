import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})

export class MainComponent implements OnInit{
  tableVar=''
  arrVar = [
    [`
    SASS, SCSS
      $font-color: #fff
      $bg-color: #00f`,
    ` SASS, SCSS
    #box
      color: $font-color
      background: $bg-color`
    ],
    [`
    LESS
      @font-color: #fff;
      @bg-color: #00f`,
    ` LESS
    #box{
      color: @font-color;
      background: @bg-color;
    }`
    ],
    [`
    STYLUS
      font-color = #fff;
      bg-color = #00f;`,
    ` STYLUS
    #box {
      color: font-color;
      background: bg-color;
    }`
    ],
    [`
    CSS
      --text-color: #ff4757;
      --text-size: 20px;`,
    ` CSS
    #div1 {
      font-size: var(--text-size);
    }
    `]
  ]

  tableMix =''
  arrMix = [
    `
    @mixin sexy-border($color, $width: 1in) {
      border: {
        color: $color;
        width: $width;
        style: dashed;
      }
    }
    p { @include sexy-border(blue); }`,
    `
    p {
    border-color: blue;
    border-width: 1in;
    border-style: dashed; }`
  ]

  tableExt = ''
  arrExt = [
      `   %message-shared {
      border: 1px solid #ccc;
      padding: 10px;
      color: #333;
    }

    .message {
      @extend %message-shared;
    }

    .success {
      @extend %message-shared;
      border-color: green;
    }`,
        `.message, .success {
      border: 1px solid #ccc;
      padding: 10px;
      color: #333;
    }

    .success {
      border-color: green;
    }`
  ]

  tableInt = ''
  arrInt = [
    `
    $name: foo;
    $attr: border;
    p.#{$name} {
      #{$attr}-color: blue;
    }`,
    `p.foo {
    border-color: blue; }`
  ]

  tableFunc = ''
  arrFunc = [
    `
    $grid-width: 40px;
    $gutter-width: 10px;

    @function grid-width($n) {
      @return $n * $grid-width + ($n - 1) * $gutter-width;
    }

    #sidebar { width: grid-width(5); }
    `,
    `
    #sidebar {
    width: 240px; }
    `
  ]

  tableFor = ''
  arrFor = [
    `
    @for $i from 1 through 3 {
      .item-#{$i} { width: 2em * $i; }
    }`,
    `
    .item-1 {
      width: 2em; }
    .item-2 {
      width: 4em; }
    .item-3 {
      width: 6em; }`
  ]

  tableEach = ''
  arrEach = [
    `
    @each $animal in puma, sea-slug, egret, salamander {
      .#{$animal}-icon {
        background-image: url('/images/#{$animal}.png');
      }
    }`,
    `
    .puma-icon {
      background-image: url('/images/puma.png'); }
    .sea-slug-icon {
      background-image: url('/images/sea-slug.png'); }
    .egret-icon {
      background-image: url('/images/egret.png'); }
    .salamander-icon {
      background-image: url('/images/salamander.png'); }`
  ]


  constructor() {}

  ngOnInit() {
    this.arrVar.forEach(item => {
      this.tableVar += `<tr><td><pre>${item[0]}</pre></td><td><pre>${item[1]}</pre></td></tr>`
    })

    this.tableMix = `
      <tr><td><pre>${this.arrMix[0]}</pre></td></tr>
      <tr><td><pre>${this.arrMix[1]}</pre></td></tr>`

    this.tableExt = `
      <tr><td><pre>${this.arrExt[0]}</pre></td>
      <td><pre>${this.arrExt[1]}</pre></td></tr>`

    this.tableInt = `
      <tr><td><pre>${this.arrInt[0]}</pre></td>
      <td><pre>${this.arrInt[1]}</pre></td></tr>`

    this.tableFunc = `
      <tr><td><pre>${this.arrFunc[0]}</pre></td></tr>
      <tr><td><pre>${this.arrFunc[1]}</pre></td></tr>`

    this.tableFor = `
      <tr><td><pre>${this.arrFor[0]}</pre></td></tr>
      <tr><td><pre>${this.arrFor[1]}</pre></td></tr>`

    this.tableEach = `
      <tr><td><pre>${this.arrEach[0]}</pre></td></tr>
      <tr><td><pre>${this.arrEach[1]}</pre></td></tr>`
    

  }


  ngOnDestroy() { }
}
