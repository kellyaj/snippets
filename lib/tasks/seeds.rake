require 'rubygems'

namespace :seeds do
  desc "seeding Andrews Snippets"
  task :basic => :environment do
    name = "Andrews Snippets"
    board = Board.create(name: name, private: false)
    board_data = [
      {
        tag_name: "webdev",
        snippets: [
          {
            name: "basic webpack with watch",
            content: "webpack -d --display-reasons --display-chunks --progress --watch"
          },
          {
            name: "install npm packages",
            content: "npm install"
          },
          {
            name: "search npm packages",
            content: "npm search somepackagename"
          },
        ]
      },
      {
        tag_name: "unix",
        snippets: [
          {
            name: "count lines in file",
            content: "wc -l package.json"
          },
          {
            name: "list file size with total",
            content: "du -shc dir other_dir"
          },
          {
            name: "cut space separated, get 3rd item",
            content: "cat list_file | cut -d \" \" -f 3"
          },
        ]
      },
      {
        tag_name: "security",
        snippets: [
          {
            name: "recent open user sessions",
            content: "sudo grep \"opened\" /var/log/auth.log"
          },
          {
            name: "recent failed user sessions",
            content: "sudo grep \"failed\" /var/log/auth.log"
          }
        ]
      },
    ]

    board_data.map do |data|
      current_tag = Tag.create(name: data[:tag_name], board_id: board.id)
      data[:snippets].map do |dsnipp|
        current_snippet = Snippet.create(name: dsnipp[:name], content: dsnipp[:content], board_id: board.id)
        SnippetTag.create(tag_id: current_tag.id, snippet_id: current_snippet.id)
      end
    end
  end
end
