# TDG-Dynamic-forms
This app allows users to create dynamic web-pages using a JSON
In order to create any field, the user has to send a new JSON with the properties(attributes) required to create that field.
Each JSON creates a new field.
A field can be a text field, a numeric field,email field,single select field,multiple select field,radio field,checkbox field
The JSON for individual fields is to be populated as below:

Name ,type and ID are mandatory for every field

Additional properties for fields:

1)TextField: placeholder,pattern(regex)
2)Radio: value (name should be different for different groups and common for radio buttons of same group)
3)CheckBox: value
4)Email: placeholder
5)Number: min,max

NOTE: Add dependent elements paremeter called dependentChildren if needed. Any change made in the parent element will reflect in the child element
