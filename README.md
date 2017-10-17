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



### Iteration 2 | Modal

Now you will integrate the modal component. You will create 3 buttons, representing a country, that trigger a modal with the information of the country:
* **France**: The capital is Paris
* **Spain**: The capital is Madrid
* **United-States**: The capital is Washington

Your Vue.js component should have:
* The id `bulmaModal`
* Two props: `head` and `body`
* It should emit a `close` event 



At the end of this iteration, you should see something like this:
 
![Screenshot](https://i.imgur.com/x75EzVz.png)

![Screenshot](https://i.imgur.com/G0mQFxy.png)

Don't forget to allow your users to leave the modal when they click on the close cross.




<!-- ### Iteration 3 | Tabs -->



Use the component in your `index.html` file.

## Bonus Instructions

### Bonus 1 | Color the messages

Find a way to add some colors on your Bulma's messages, like in the following example:

```html
<bulma-message header="My header" body="My body" color="success"></bulma-message>
```

Allowed colors are:

- `dark`
- `primary`
- `link`
- `info`
- `success`
- `warning`
- `danger`

Hints: you will need to use [class bindings](https://vuejs.org/v2/guide/class-and-style.html) and [prop validation](https://vuejs.org/v2/guide/components.html#Prop-Validation).
