## there's difference between container-fluid and container 
- containers change with different viewpoints
- container fluid changes sizes according to their parent containers

## Bootstrap has a grid system

  a row can have as many rows with columns size from 1 to 12

  another point is that you get a container
    which then would have a row
      with then would have columns

## Columns
- we assign elements within a row, a column width
- we do this with boostrap classes:
  - col-{size}-{number}
- {size} = the size of the viewport which you are targeting
- {number} = number of columns you want the element to span
- sizes:
  - xs (<768), sm(>=768), md(>=992), lg(>=1200)
- Number of columns
  - any number between 1 and 12

## offestting columns
-an example of offsets
  -col-xs-offset-2
    ! an important note is that when you offset you need to reduce the size of the column as well
    ! right when we get into bigger viewports, you have to reset/remove the offset as well
      and example would be : 
        col-md-offeset-0
   
##  Push & Pull
- this concept can change the placement of the conent when switching the different viewports
  - for example we have this
    col-lg-8 col-lg-push-4
    col-lg-4 col-lg-pull-8
      thus when it gets bigger, the column on the top will move 4 to the right and the column on the bottom   
      will move 8 to the left, hence the push and pull
  - anaother caveat is when you want to push and pull during md size screens, you have to push them back as well and have
    them reset
    - here's an example: 
      col-md-push-6 col-lg-8 col-lg-push-0 
      col-md-pull-6 col-lg-8 col-lg-pull-0 
        this will revert and reset when you go from md to lg screens

  ## Clearfix
  - when there are elements that are off elements to clear the floats
    - you do that by add this code between the elements that are offset
      <div class="clearfix"></div> this bootstrap class will fix the errors
        this is considered a quick fix
  you can also use this css example to fix it as well
  .thumb:nth-child(odd){clear: both;}

## Text styles
- you can use the text styles given from bootstrap
- here's an example below
  - <span class="h3">Header 3</span>
- you can use bootstrap's style classes like lead and other things to overrride the default 

## List Styles
- here are some examples for list styles that bootstrap provides
  list-unstyled
    you can use it for ul, ol, and li
  list-inline    
    this will make it horizontal, good for navigations
    you can use it for ul, ol, and li but not dl
  dl-horizontal 
    makes the dt and dd be next to each other

## Button Styles
- here are some classes that you can apply to the buttons
  - btn 
  - btn-default
  - btn-primary
  - btn-sm
  - active disabled
  - etc. 
- examples
  - <a href="#" class="btn btn-default active">active</a>
  - <button class="btn btn-default" disabled="disabled">button</button> 

## Image Styles
- img-responsive
  - you can give this class for an image to get these styles:
    display: block;
    max-wdith: 100%; // this will be 100% of their parent container
    height: auto;
- img-circle
- img-rounded
- img-thumbnail
  - this provides the some padding a slight border as well
- center-block 
  - this makes the image in the middle

## Visibility Classes
- to hide elements
  - hidden-xs/hidden-md
    - these hide the elements on these sizes
- to show elements
  - visisble-xs / visisble-md-block
    - these are only visible on these screens and the rest of the widths are not visible  
    - visible-md-inline-block
      - gives us the ability of inline and block
        - Blocks basically takes the entire space of the parent element
  
## Drop-down Menu's 
- <div class="dropdown">
    <button type="button" class="btn btn-dfault dropdown-toggle" data-toggle="dropdown">
      Meats <div class="caret"></div> // this gives the caret
    </button>

    <ul class="dropdown-menu">
      <li class="dropdown-header">Meats</li> // you can style this to be headers as these wont be clickable
      <li class="disabled">Ham</li> // this makes the item unclickable
      <li>Beef</li>
      <li>Chicken</li>
  
      <li class="dropdown-header">Veggies</li>
      <li><a href="#">Spinach</a></li>
      <li>Broccoli</li>
    </ul>
  </div>

  ## Tabs and Pills (Navigation)
  - nav 
  - nav-tabs
  - active
  - nav-pills
  - nav-stacked
    - makes the nav be vertial
  - nav-justified
    - makes the nav be equal in size within the parent element

## NavBars
- nav
- navbar-nav
  - have this within a nav element
- navbar
  - you nest this within a nac navbar-nav within the ul
    - li
- navbar-inverse / navbar-default
- when you want the navbar to stretch across the page, you take them out of a container
- if you want the navbar to stretch out and want the nav elements to line up within the other stuff
    you then have to put it in the container
- navbar-fixed-bottom
  - sometimes you may need to change the padding from the bottom to show everything
- navbar-fixed-top
  - sometimes you may need to change the padding from the top to show everything
 
## NavBar Classes
- navbar-header
  - this can give you a logo to the home page or title
  - this is in a div tag
  - navbar-brand 
    - this is in an a tag
- to implement buttons in the navbar
  - navbar-btn 
    - navbar-right to have the buttons in the right
  - this is with a button tag

## Mobile Navbars
- collapse
- navbar-collapse
- id='mydropdown"
- nav-bar-toggle
- collapsed
- data-toggle="collapse"
- data-target="#mydropdown"
- <span class="icon-bar"></span>
  - we need three of theses to create the button

## Jumbotrons
- jumbotron
  - you can use a container class inside the jumbotron to have the elements inside alighn with everything else
  - you should check the margin and the padding
  
## Styling Forms
- form-control
- form-group
  - creates groups for forms
- checkbox-inline
- radio-inline
  - we have to give the inputs a name to have only one of them selectable
- sr-only
  - these are for screen leaders only to get rid of the element

## Badges
- you can have bdges next to the elements
  - <span class="badge"></span>
  - you do this with btn classes
- label level-danger
  - these are for span tags

## Panels
- panel
- panel-default
- panel-heading
- panel-title
- panel-body
- panel-footer

## Tooltips
- data-toggle="tooltip"
- data-placement="top"
- title-"anything"
- we can write a javascript script to do something

## Carousels
- carousel-indicators
  - in a ol tag
    - li
      - data-target="#myslider" 
      - data-slide-to="index of the page"
      - active
- carousel
  - data-ride="carousel"
  - slide
  - carousel-inner
    - item 
      - active
        - to turn the carousel on
    - item  
      - carousel-caption
    - item
- right carousel-control
  - href="#anything" 
  - data-slide="next"
- left carousel-control
  - href="#anything" 
  - data-slide="previous"

## Modals
- modal
  - you give a unique id
  - modal-dialog
    - modal-content
      - modal-header
        - modal-title
      - model-body
  - data-toggle="modal
  - data-target="#modal" <-- the unique id
  - close
    - data-dismiss="modal"
    - this class enables us to close this

## Accordions
- panel-group
  - unique id
  - panel with panel-primary
    - panel-heading
      - panel-title
      - data-target
      - data-toggle
        - collapse
    - panel-collapse collapse
      - panel-body
  - data-parent
    - this closes the others accordians that are actice 

## Bootstrap Themes
- you can use default css
- 