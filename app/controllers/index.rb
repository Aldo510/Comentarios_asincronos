get '/' do
  # La siguiente linea hace render de la vista 
  # que esta en app/views/index.erb
  @comments = Comment.all
  erb :index
end

post '/new_comment' do
  #Guardar los valores que ingrese el usuario
  comment = params[:comment]
  autor = params[:autor]
  Comment.create(content: comment, autor: autor)
  @comments = Comment.all
  #Condicion para saber si existe la respuesta del ajax
  if request.xhr?
    # respond to Ajax request
    #Si existe recarga solo la página del _die_roll, si recargar el layout(pagina principal)
   
    erb :_coments, layout: false
     
  else
    # respond to normal request
    #Si no existe el ajax que solamente renderee toda la página
    redirect to '/'
  end

end