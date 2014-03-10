            <!-- Template for user info and entering messages -->
            <script type="text/template" id="user-template">
                <div class="user-stuff">
                    <img class="avatar" src="http://files.myopera.com/FranklinBR/albums/6180651/Beautiful%20Green%20Nature%20With%20Birds%20Blue%20Jay%20Bird.jpg">
                    <h3><%=currentUser.get('username')%></h3>
                </div>
                <div class="new-message">
                    <textarea type="text" id="message-data" placeholder="Send a message..."></textarea>
                    <button type="class" id="send-btn">Send</button>
                </div>

            </script>

            <!-- Template for messages -->
            <script type="text/template" id="list-template">
                <div class= "message-header">
                    <h3><%=model.get('author')%></h3>
                    <span><%=model.get('time')%></span>
                </div>
                <div class= "message-body">
                    <p><%=model.get('messageContents')%><p>
                </div>
            </script>


            for login view:
                <!--<div>
                    <label for="user-email">Email:</label>
                    <input type="email" placeholder="me@example.com" id="user-email"/>
                </div>
                <div>    
                    <label for="user-avatar">Avatar:</label>
                    <input type="file" style="display: inline-block" id="user-avatar"/>
                </div>-->