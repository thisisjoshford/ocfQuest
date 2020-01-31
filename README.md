# ocfQuest
//render a list of questions based on the metadata
    // get the ul from the DOM
    //get the questions from the meta data
    //loop through the questions
        //get a question from the array
        //make an li for the question
            //create li
            //make a tag for the li
            //UNLESS the question is already completed (check local storage) if so.. make a span
            // add text content and other properties to the tag
            //add the href to the tag with query params for the question
            // append the tag to the li


            //get form from DOM
            //create a label for each choice with span and input inside
            //get the data for the correct question using the query parameter and findbyID
                //get the data
                //put the question description in a div (#question)
                //for each option/choice, render a radio button
                    //make a label
                    //make a span
                    //add the choice.description to the span
                    // make an input of:
                        //type: radio
                        //name: question
                //for the form, add an event listener on submit
                    //in the event listener get the formData
                    //use the user selection in the form data to update the dom and change state
                    //call the question completed in state and redirect to list page

