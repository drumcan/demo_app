require 'braintree'
require 'rubygems'
require 'sinatra'
require 'webrick'
require 'webrick/https'
require 'openssl'

Braintree::Configuration.environment = :sandbox
Braintree::Configuration.merchant_id = 'yxb4zvxjdctbbppt'
Braintree::Configuration.public_key = 'xktj76v3mb4nt7wx'
Braintree::Configuration.private_key = '2632842e6df4fff163c877944980da46'

get "/" do
  erb :hosted_fields
end

get "/dropin" do
  @client_token = Braintree::ClientToken.generate(:customer_id => "251484083")
  erb :dropin
end

post "/checkout" do
p params
result = Braintree::Transaction.sale(
  :amount => "100.00",
  :payment_method_nonce => params[:payment_method_nonce],
  :customer => {
    :email => "jon.snow@thewall.com",
    :first_name => "Jon",
    :last_name => "Snow",
    :phone => "555-555-5555"
  },
  :device_data => params[:device_data],
  :options => {
  	:submit_for_settlement => true,
  }
)

if result.success?
  p result
  content_type :json
  if result.transaction.payment_instrument_type != "paypal_account" or "venmo_account"
    return {:result => "Success! Braintree Transaction ID: #{result.transaction.id} | Kount Transaction id: #{result.transaction.risk_data.id}"}.to_json
  else
    return {:result => "Success! Braintree Transaction ID: #{result.transaction.id}"}.to_json
  end
  else
   p result.message
  end
end
