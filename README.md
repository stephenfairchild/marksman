# Marksman

A lightweight utility written in Node that serves a folder of markdown text via a RESTful endpoint.

## Longer Description

(2.0)
Marksman will watch for changes in those files and will automatically serve the most up to date content.

## Install

npm install marksman

or

yarn install marksman

## Examples

For a folder structure like this:

````
    /documents
        /projects
            /2020-04-23.md
        /journal
            /2020-04-23.md
```

We would run:
`marksman ~/documents`

Then we could access these files over HTTP like:

    `curl -XGET http://localhost:8080/projects
    ``` {
        data: [
            {name: "2020-04-23.md", text: "..contents of file"}
        ]
    }```
```

A marksman.yaml file is also acceptible. Here is an example

Options:
-P --port: The port in which you want the data to be served on.
-F --format: The format in which you want the response in. Possible options are "markdown" (the default) or "html"
````
