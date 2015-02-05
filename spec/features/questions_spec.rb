require 'rails_helper'

describe "The Quiz" do

  it "shows us one question from the quiz" do
    visit '/questions'
    expect(page).to have_content "Know what this is?"
  end

  # it "has a link to take us to the Sorting Quiz" do
  #   visit '/'
  #   click_link "sorting quiz"
  #   expect(page).to have_content "Sorting Quiz"
  #   expect(current_path).to eq('/quiz')
  # end

  # describe "when i click the 'sort' button", js: true do
  #   before(:each) do
  #     visit '/quiz'
  #     within("#quiz") { fill_in 'numbers', with: "-1, 4, 2, 8, 1, 20" }
  #     click_button "sort"
  #   end

  #   it "removes the input" do
  #     expect(page.has_no_field? 'numbers').to be true
  #     expect(page.has_no_button? 'sort').to be true
  #   end

  #   it "displays the numbers in ascending order" do
  #     expect(page).to have_content "-1, 1, 2, 4, 8, 20"
  #   end

  # end

end