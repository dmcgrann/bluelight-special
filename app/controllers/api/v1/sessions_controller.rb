class Api::V1::SessionsController < ApplicationController

  def create
    @user = User.find_by(email: params[:session][:email])

    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      render json: UserSerializer.new(@user), status: :ok
    else
      render json: {
        error: "Invalid Credentials"
      }
    end
  end

  def get_user
    if logged_in?
      render json: UserSerializer.new(current_user)
    else
      render json: {
        error: "Please login."
      }
    end
  end

  def destroy
    reset_session
    render status: :ok
  end

end
