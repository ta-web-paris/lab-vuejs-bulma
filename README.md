![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# Vue.js | Bulma integration

## Introduction

Bulma is a very nice CSS framework that allows you to display things link message boxes, modals and other nice components. You can find a list on its documentation: https://bulma.io/documentation/components/breadcrumb/.
However, Bulma components are just CSS classes. They don't have any behaviour.

In this exercise we will define Vue.js components that will use Bulma components. They will add to them the behaviour and modularity we need.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Instructions

### Iteration 0 | Setup the project

In the `index.html` file in `starter-code`, include Bulma, Vue.js, and display a title. We recommend you also use the class `container` to make it prettier. At this step, you should see something like this:
![Screenshot](https://i.imgur.com/RyenWlm.png)


### Iteration 1 | Message

We will begin with the Bulma message component that is described here: https://bulma.io/documentation/components/message/

If you look at the documentation, this how you would use the component using only Bulma:

```html
<article class="message">
  <div class="message-header">
    <p>Hello Ironhacker</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    I created this awesome website during my Ironhack bootcamp.
  </div>
</article>
```

With the component you are going to define, the same thing will be done by writing the following:

```html
<bulma-message header="Hello Ironhacker" body="I created this awesome website during my Ironhack bootcamp."></bulma-message>
```

Much easier, right?

You should also find a way to hide the message when the user clicks on the delete button in the top right corner.

![Screenshot](https://i.imgur.com/oPqwO3z.png)

Use the component in your `index.html` file with the header and the body you like.

### Iteration 2 | Modal

Now you will integrate the modal component. You will create 3 buttons, each representing a country, that will open a modal with the information of the country.
The countries will be:

* **France**: The capital is Paris
* **Spain**: The capital is Madrid
* **United-States**: The capital is Washington

Your Vue.js component should:

* Have the id `bulmaModal`,
* Require two props: `head` and `body`,
* Emit a `close` event when it is closed.

At the end of this iteration, you should see something like this:
 
![Screenshot](https://i.imgur.com/x75EzVz.png)

![Screenshot](https://i.imgur.com/G0mQFxy.png)

Don't forget to allow your users to leave the modal when they click on the close cross.

### Iteration 3 | Breadcrumbs

Breadcrumbs are sometimes useful to help users find their way on a website. But where they shine is for Search Engine Optimization, which is the art of tricking Google into ranking a webpage higher.

If you were only using Bulma, you would include breadcrumbs as follow:

```html
<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Ironhack</a></li>
    <li><a href="#">Courses</a></li>
    <li><a href="#">Webdev</a></li>
    <li class="is-active"><a href="#" aria-current="page">Full-time</a></li>
  </ul>
</nav>
```

For this iteration, you are to define not one component, but two! You will create the component `BulmaBreadcrumbs` for the breadcrumbs and the component `BulmaBreadcrumbLink` for the links inside. They will be used as follows:

```html
  <bulma-breadcrumbs>
    <bulma-breadcrumb-link href="#">Ironhack</bulma-breadcrumb-link>
    <bulma-breadcrumb-link href="#">Courses</bulma-breadcrumb-link>
    <bulma-breadcrumb-link href="#">Webdev</bulma-breadcrumb-link>
    <bulma-breadcrumb-link active href="#">Full-time</bulma-breadcrumb-link>
  </bulma-breadcrumbs>
```

To put a component inside another component, you will need to use [slots](https://vuejs.org/v2/guide/components.html#Content-Distribution-with-Slots).
Also, to be able to use the property `active` as above, you need to specify its type using the object notation (see [prop validation](https://vuejs.org/v2/guide/components.html#Prop-Validation)).

## Bonus Instructions

### Bonus 1 | Color the messages

Find a way to add some colors on your Bulma's messages, like in the following example:

```html
<bulma-message header="My header" body="My body" color="success"></bulma-message>
```

Make sure that only allowed colors are used. They are the following:

- `dark`
- `primary`
- `link`
- `info`
- `success`
- `warning`
- `danger`

<details>
 <summary>Hints:</summary>
<p>
You will need to use the array notation for [class bindings](https://vuejs.org/v2/guide/class-and-style.html) and a validator for [prop validation](https://vuejs.org/v2/guide/components.html#Prop-Validation).
</p>
</details>
