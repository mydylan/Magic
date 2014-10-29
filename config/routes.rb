Rails.application.routes.draw do
  
  root 'welcome#index'
	get  '/bbb' => 'welcome#hello'
  
end
