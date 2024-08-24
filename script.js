document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseover', function() {
            this.querySelector('.dropdown-menu').style.display = 'block';
        });

        dropdown.addEventListener('mouseout', function() {
            this.querySelector('.dropdown-menu').style.display = 'none';
        });
    });

    // Theme toggle functionality
    var themeToggle = document.querySelector('.theme-toggle');
    var themeIcon = themeToggle.querySelector('i');

    themeToggle.addEventListener('click', function() {
        if (themeIcon.classList.contains('fa-sun')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            // Add additional logic for dark mode here
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            // Add additional logic for light mode here
        }
    });

    // Toggle nav functionality
    var openNavButton = document.querySelector('.open-nav');
    var closeNavButton = document.querySelector('.close-nav');
    var navList = document.querySelector('.nav-list');

    openNavButton.addEventListener('click', function() {
        navList.classList.add('show');
        openNavButton.style.display = 'none';
        closeNavButton.style.display = 'block';
    });

    closeNavButton.addEventListener('click', function() {
        navList.classList.remove('show');
        openNavButton.style.display = 'block';
        closeNavButton.style.display = 'none';
    });

    // Dropdown toggle functionality for small screens
    const dropdownLinks = document.querySelectorAll('.nav-item.dropdown .nav-link');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('show');
        });
    });

    // Image hover functionality
    document.querySelectorAll('.graph-span').forEach(span => {
        span.addEventListener('mouseover', function() {
            const graphImg = this.closest('.graph-div').querySelector('.graph-img');
            graphImg.src = this.getAttribute('data-src');
        });
    });

    // Store the content for each framework in an object
    const frameworkContent = {
        express: `
            <h2>ExpressJS</h2>
            <p class="space-down">Here's how to quickly integrate APItoolkit into your Express.js application.</p>
            <h2>Installation</h2>
            <section class="code-five-codepad">
                <p>npm install apitoolkit-express</p>
            </section>
            <h2>Integrate</h2>
            <section class="code-five-codepad">
                <p><span class="purple">import</span> express <span class="purple">from</span> <span class="lemon">"express"</span>;</p>
                <p><span class="purple">import</span> { APIToolkit } <span class="purple">from</span> <span class="lemon">"apitoolkit-express"</span>;</p>
                <p><span class="purple">const</span> app = <span class="light-blue">express</span>( );</p>
                <p><span class="purple">const</span> apitoolkitClient = APIToolkit.<span class="orange">NewClient</span>( { <span class="brown">apiKey</span>: <span class="lemon">"{YOUR_API_KEY_HERE}"</span> } );</p>
                <br>
                <p>app.<span class="light-blue">use</span><br>(apitoolkitClient.<br>expressMiddleware)</p>
                <p class="fade">// All controllers should live here</p>
                <p>app.<span class="light-blue">get</span>("/", (req, res) => {<br>} );</p>
                <p class="fade">// ...</p>
                <p class="fade">// The error handler must be before any other error middleware</p>
                <p class="fade">// and after all controllers</p>
                <p>app.<span class="light-blue">use</span>(apitoolkitClient.errorHandler)</p>
            </section>
            <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/nodejs/expressjs"><b>ExpressJS SDK guide</b></a> to learn more.</p>
        `,
        phoenix: `
            <h2>Elixir Phoenix</h2>
                <p class="space-down">Here's how to quickly integrate APItoolkit into your Elixir application.</p>
                <h2>Installation</h2>
                <section class="code-five-codepad">
                    <p>{:apitoolkit_phoenix, <span class="lemon">"~> 0.1.1"</span> }</p>
                </section>
                <h2>Integrate</h2>
                <section class="code-five-codepad">
                    <p class="fade">// route.ex file</p>
                    <p>defmodule <span class="orange">HelloWeb</span>.Router <span class="purple">do</span></p>
                    <p><span class="purple">import</span> <span class="orange">ApitoolkitPhoenix</span></p>
                    <br>
                    <p>pipeline :api <span class="purple">do</span></p>
                    <p>plug <span class="orange">ApitoolkitPhoenix</span>,</p>
                    <p><span class="brown">config</span>: %{<br><span class="brown">api_key</span>: <span class="lemon">"{YOUR_API_KEY_HERE}"</span>,<br>}</p>
                    <p>end</p> <br>
                    <p class="fade">// Automatic error handling</p>
                    <p>@impl <span class="orange">Plug</span>.ErrorHandler</p>
                    <p>def <span class="light-blue">handle_errors</span>(conn, err) <span class="purple">do</span></p>
                    <p>conn = <span class="light-blue">report_error</span>(conn, err)</p>
                    <p><span class="light-blue">json</span>(conn, %{<span class="brown">message</span>: <span class="lemon">"Something went wrong"</span> })</p>
                    <p>end</p>
                    <p>end</p>
            </section>
            <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/elixir/phoenix"><b>Phoenix SDK guide</b></a> to learn more.</p>
        `,
        laravel: `
            <h2>PHP Laravel</h2>
                    <p class="space-down">Here's how to quickly integrate APItoolkit into your Laravel application.</p>
                    <h2>Installation</h2>
                    <section class="code-five-codepad">
                        <p>composer require apitoolkit/apitoolkit-laravel</p>
                    </section>
                    <h2>Integrate</h2>
                    <p class="space-down">First, set the <span class="shaded">APITOOLKIT_KEY</span> environment variable to your <span class="shaded">.env</span> file.</p>
                    <section class="code-five-codepad">
                        <p>APITOOLKIT_KEY=xxxxxx-xxxxx-xxxxxx-xxxxxx-xxxxxx</p>
                    </section>
                    <p class="space-down">Next, register the middleware in your <span class="shaded">app/Http/Kernel.php</span> file.</p>
                    <section class="code-five-codepad">
                        <p><span class="gap"></span>[<br><span class="gap"></span><span class="gap"></span><span class="brown">\APIToolkit\Http\Middleware\<br><span class="gap"></span><span class="gap"></span>APIToolkit</span>::<span class="brown">class</span> ,<br><span class="gap"></span><span class="gap"></span>] ,<br><span class="gap"></span>] ;<br>}</p>
                    </section>
                    <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/php/laravel"><b>Laravel SDK guide </b></a> to learn more.</p>
        `,
        nest: `
            <h2>.NET Core</h2>
                <p class="space-down">Here's how to quickly integrate APItoolkit into your .NET application.</p>
                <h2>Installation</h2>
                <section class="code-five-codepad">
                    <p>dotnet add package ApiToolkit.Net</p>
                </section>
                <h2>Integrate</h2>
                <section class="code-five-codepad">
                    <p><span class="purple">var</span> config = <span class="purple">new</span> Config<br>{</p>
                    <p><span class="gap"></span>Debug = <span class="light-blue">true, # Set debug flags to false in production</span></p>
                    <p><span class="gap"></span>ApiKey = <span class="lemon">"{YOUR_API_KEY_HERE}"<br>};</span></p>
                    <p><span class="purple">var</span> client = <span class="purple">await</span> APIToolkit.NewClientAsync(config);</p>
                    <p><span class="light-blue"># Register the middleware to use the initialized client</span></p>
                    <p>app.Use(<span class="purple">async</span> (context, next) =><br>{</p>
                    <p><span class="gap"></span><span class="purple">var</span> apiToolkit = <span class="purple">new</span> APIToolkit(next, client);</p>
                    <p><span class="gap"></span><span class="purple">await</span> apiToolkit.InvokeAsync(context);<br>} );</p>
                </section>
                <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/dotnet/dotnetcore"><b>.Net Core SDK guide</b></a> to learn more.</p>
        `,

        django: `
            <h2>Django</h2>
                <p class="space-down">Here's how to quickly integrate APItoolkit into your Django application.</p>
                <h2>Installation</h2>
                <section class="code-five-codepad">
                    <p>pip install apitoolkit-django</p>
                </section>
                <h2>Integrate</h2>
                <section class="code-five-codepad">
                    <p>MIDDLEWARE = [<br><span class="gap"></span><span class="gap"></span>...,<br><span class="lemon"><span class="gap"><span class="gap"></span></span>'apitoolkit_django.APIToolkit'</span>,<br><span class="gap"></span><span class="gap"></span>...,<br>]</p>                   
                    <p><span class="purple">var</span> config = <span class="purple">new</span> <span class="brown">Config</span><br>{</p>
                    <p><span class="gap"></span><span class="gap"></span>Debug = <span class="light-blue">true</span>, <span class="fade"># Set debug flags to false in production</span></p>
                    <p><span class="gap"></span><span class="gap"></span>ApiKey = <span class="lemon">"{YOUR_API_KEY_HERE}"</span><br>};</p>
                </section>
                <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/python/django"><b>Django SDK guide</b></a> to learn more.</p>
        `,

        go: `
            <h2>Golang Native</h2>
                <p class="space-down">Here's how to quickly integrate APItoolkit into your native Golang application.</p>
                <h2>Installation</h2>
                <section class="code-five-codepad">
                    <p>go get -u github.com/apitoolkit/apitoolkit-go</p>
                </section>
                <h2>Integrate</h2>
                <section class="code-five-codepad">
                    <p><span class="purple">package</span> main</p>  <br>                 
                    <p><span class="purple">import</span> (<br><span class="lemon">"net/http"<br>"context"</span><br>apitoolkit <span class="lemon">"github.com/apitoolkit/apitoolkit-go"</span><br>)</p>
                    <p><span class="purple"><span class="light-blue">func</span></span> main( ) {</p>
                    <p class="fade"><span>// Initialize APIToolkit client with your generated API key</span></p>
                    <p>ctx := context.Background( )</p>
                    <p>apitoolkitClient, err := apitoolkit.NewClient(ctx, apitoolkit.Config{APIKey:<span class="lemon">"{YOUR_API_KEY_HERE}"</span> } )</p>
                    <p><span class="purple">if</span> err != <span class="light-blue">nil</span> {<br><span class="brown">panic</span>(err)<br>}</p>
                    <p>http.Handle(<span class="lemon">"/"</span>, apitoolkitClient.Middleware<br>(http.HandlerFunc(<span class="purple">func</span>(w http.ResponseWriter,<br> r *http.Request) {</p>
                    <p>w.Write( [ ]<span class="purple">byte</span>(<span class="lemon">"Hello, World!"</span>) )<br>} ) ) )</p>
                    <p>http.ListenAndServe(<span class="lemon">":8080"</span>, <span class="light-blue">nil</span>)<br>}</p>
                </section>
                <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/golang/native"><b>Go Native SDK guide</b></a> to learn more.</p>
        `,

        fastapi: `
            <h2>Fast API</h2>
                <p class="space-down">Here's how to quickly integrate APItoolkit into your FastAPI application.</p>
                <h2>Installation</h2>
                <section class="code-five-codepad">
                    <p>pip install apitoolkit-fastapi</p>
                </section>
                <h2>Integrate</h2>
                <section class="code-five-codepad">
                    <p><span class="purple">from</span> fastapi <span class="purple">import</span> FastAPI</p>                
                    <p><span class="purple">from</span> apitoolkit_fastapi <span class="purple">import</span> APIToolkit</p><br>
                    <p>app = FastAPI()</p><br>
                    <p>apitoolkit = APIToolkit(api_key=<span class="lemon">"{YOUR_API_KEY_HERE}"</span>)</p><br>
                    <p>app.middleware(<span class="lemon">'http'</span>)(apitoolkit.middleware)</p>
                </section>
                <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/python/fastapi"><b>Fast API SDK guide</b></a> to learn more.</p>
        `,
        
        symfony: `
            <h2>PHP Symfony</h2>
                <p class="space-down">Here's how to quickly integrate APItoolkit into your Symfony PHP application.</p>
                <h2>Installation</h2>
                <section class="code-five-codepad">
                    <p>composer require apitoolkit/apitoolkit-symfony</p>
                </section>
                <h2>Integrate</h2>
                <p class="space-down">First, set the <span class="shaded">APITOOLKIT_KEY</span> environment variable in your <span class="shaded">.env</span> file.</p>
                <section class="code-five-codepad">
                    <p>APITOOLKIT_KEY=xxxxxx-xxxxx-xxxxxx-xxxxxx-xxxxxx</p> 
                </section>
                <p class="space-down">Next, register the service in your <span class="shaded">services.yaml</span> file.</p>
                <section class="code-five-codepad">
                    <p><span class="brown">services:</span></p>
                    <p><span class="lemon">APIToolkit\EventSubscriber\APIToolkitService:</span></p>
                    <p><span class="brown">arguments:</span></p>
                    <p><span class="lemon">$apiKey: '%env(APITOOLKIT_KEY)%'</span></p>
                    <p class="fade"># Optional: if you want to cache login result add this cache poll instance via setter injection</p>
                    <p><span class="brown">calls:</span></p>
                    <p><span class="light-blue">-</span> <span class="brown">setCachePool:</span> [<span class="lemon">'@PutYourCachePoolServiceHere'</span>]</p>
                    <p><span class="brown">tags:</span></p>
                    <p><span class="light-blue">-</span> { <span class="brown">name:</span> <span class="lemon">'kernel.event_subscriber'</span> }</p>
                </section>
                <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/php/symfony"><b>Symphony SDK guide</b></a> to learn more.</p>
        `,

        flask: `
            <h2>Flask</h2>
                <p class="space-down">Here's how to quickly integrate APItoolkit into your Flask application.</p>
                <h2>Installation</h2>
                <section class="code-five-codepad">
                    <p>pip install apitoolkit-flask</p>
                </section>
                <h2>Integrate</h2>
                <section class="code-five-codepad">
                    <p><span class="purple">from</span> flask <span class="purple">import</span> Flask</p>
                    <p><span class="purple">from</span> apitoolkit_flask <span class="purple">import</span> APIToolkit</p><br>
                    <p>app = Flask(__name__)</p><br>
                    <p>apitoolkit = APIToolkit(api_key=<span class="lemon">"{YOUR_API_KEY_HERE}"</span>, debug=<span class="light-blue">True</span>)</p><br>
                    <p><span class="light-blue">@app.before_request</span></p>
                    <p><span class="purple">def</span> <span class="light-blue">before_request</span>():</p>
                    <p><span class="gap"></span>apitoolkit.beforeRequest()</p><br>
                    <p><span class="light-blue">@app.after_request</span></p>
                    <p><span class="purple">def</span> <span class="light-blue">after_request</span>(response):</p>
                    <p><span class="gap"></span>apitoolkit.afterRequest(response)</p>
                    <p><span class="gap"></span><span class="purple">return</span> response</p>
                </section>
                <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/python/flask"><b>Flask SDK guide</b></a> to learn more.</p>
        `,

        gin: `
            <h2>Golang Gin</h2>
                <p class="space-down">Here's how to quickly integrate APItoolkit into your Gin application.</p>
                <h2>Installation</h2>
                <section class="code-five-codepad">
                    <p>go get github.com/apitoolkit/apitoolkit-go</p>
                </section>
                <h2>Integrate</h2>
                <section class="code-five-codepad">
                    <p><span class="purple">package</span> main</p><br>
                    <p><span class="purple">import</span> (</p>
                    <p><span class="lemon">"context"</span></p>
                    <p>apitoolkit <span class="lemon">"github.com/apitoolkit/apitoolkit-go"</span></p>
                    <p><span class="lemon">"github.com/gin-gonic/gin"</span></p>
                    <p>)</p><br>
                    <p><span class="purple">func</span> <span class="light-blue">main</span>( ) {</p><br>
                    <p><span class="gap"></span><span class="fade">// Initialize the client using your apitoolkit.io generated apikey</span></p>
                    <p>apitoolkitClient, err := apitoolkit.NewClient<br>(context.Background(), apitoolkit.Config{<br>APIKey: <span class="lemon">"{YOUR_API_KEY_HERE}"</span>})</p>
                    <p><span class="gap"></span><span class="purple">if</span> err != <span class="light-blue">nil</span> {<br><span class="gap"></span><span class="gap"></span><span class="brown">panic</span>(err)<br<span class="gap"></span>>}</p><br>
                    <p><span class="gap"></span>router := gin.New( )</p>
                    <p><span class="gap"></span><span class="fade">// Register with the corresponding middleware of your choice. For Gin router, we use the GinMiddleware method.</span></p>
                    <p><span class="gap"></span>router.Use<br>(apitoolkitClient.GinMiddleware)<br><br>}</p>
                </section>
                <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/golang/gin"><b>Go Gin SDK guide</b></a> to learn more.</p>
        `,

        adonis: `
            <h2>AdonisJS</h2>
                <p class="space-down">Here's how to quickly integrate APItoolkit into your AdonisJS application.</p>
                <h2>Installation</h2>
                <section class="code-five-codepad">
                    <p>npm install apitoolkit-adonis</p>
                </section>
                <h2>Integrate</h2>
                <p class="space-down">First, configure the package</p>
                <section class="code-five-codepad">
                    <p>node ace configure apitoolkit-adonis</p>
                </section>
                <p class="space-down">Next, set API key in a <span class="shaded">/conf/apitoolkit.ts</span> file.</p>
                <section class="code-five-codepad">
                    <p><span class="purple">export const</span> apitoolkitConfig = {</p>
                    <p><span class="brown">apiKey</span>: <span class="lemon">"<span class="gap"></span>"</span>,<br>};</p>
                </section>
                <p class="space-down">Then, add <span class="shaded">@ioc:APIToolkit</span> to your global middlewares in the <span class="shaded">start/kernel.ts</span> file.</p>
                <section class="code-five-codepad">
                    <p><span class="brown">Server</span>.middleware.<span class="light-blue">register</span>([</p>
                    <p><span class="gap"></span>( ) => <span class="light-blue">import</span>(<span class="lemon">"@ioc:Adonis/Core/BodyParser"</span>),</p>
                    <p><span class="gap"></span> ( ) => <span class="light-blue">import</span>(<span class="lemon">"@ioc:APIToolkit"</span>),<br>]);</p>
                </section>
                <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/nodejs/adonisjs"><b>AdonisJS SDK guide</b></a> to learn more.</p>
        `,

        fastify: `
            <h2>Fastify</h2>
                <p class="space-down">Here's how to quickly integrate APItoolkit into your Fastify.js application.</p>
                <h2>Installation</h2>
                <section class="code-five-codepad">
                    <p>npm install apitoolkit-fastify</p>
                </section>
                <h2>Integrate</h2>
                <section class="code-five-codepad">
                    <p><span class="purple">import</span> APIToolkit <span class="purple">from</span> <span class="lemon">"apitoolkit-fastify"</span>;</p>
                    <p><span class="purple">import</span> <span class="brown">Fastify</span> <span class="purple">from</span> <span class="lemon">"fastify"</span>;</p><br>
                    <p><span class="purple">const</span> fastify = <span class="brown">Fastify</span>( );</p><br>
                    <p><span class="fade">// Create and initialize an instance of the APIToolkit</span></p>
                    <p><span class="purple">const</span> apittoolkitClient = APIToolkit.<span class="brown">NewClient</span>({</p>
                    <p><span class="gap"></span><span class="brown">apiKey</span>: <span class="lemon">"{YOUR_API_KEY_HERE}"</span>,</p>
                    <p><span class="gap"></span>fastify,</p>
                    <p>});</p>
                    <p>apitoolkitClient.<span class="light-blue">init</span>( );</p>
                </section>
                <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/nodejs/fastifyjs"><b>Fastify SDK guide</b></a> to learn more.</p>
        `,

        nest2: `
            <h2>NestJS</h2>
                <p class="space-down">Here's how to quickly integrate APItoolkit into your Nest.js application.</p>
                <h2>Installation</h2>
                <section class="code-five-codepad">
                    <p>npm install apitoolkit-express</p>
                </section>
                <h2>Integrate</h2>
                <section class="code-five-codepad">
                    <p><span class="purple">import</span> { <span class="brown">NestFactory</span> } <span class="purple">from</span> <span class="lemon">"@nestjs/core"</span>;</p>
                    <p><span class="purple">import</span> { APIToolkit } <span class="purple">from</span> <span class="lemon">"apitoolkit-express"</span>;</p>
                    <p><span class="purple">import</span> { <span class="brown">AppModule</span> } <span class="purple">from</span> <span class="lemon">"./app.module"</span>;</p>
                    <p><span class="fade">//</span></p>
                    <p><span class="purple">async function</span> <span class="light-blue">bootstrap</span>( ) {</p>
                    <p><span class="gap"></span><span class="purple">const</span> apiToolkitClient = APIToolkit.<span class="brown">NewClient</span>({</p>
                    <p><span class="gap"></span><span class="gap"></span><span class="brown">apikey</span>: <span class="lemon">"{YOUR_API_KEY_HERE}"</span>,</p>
                    <p><span class="gap"></span>});</p>
                    <p><span class="gap"></span><span class="purple">const</span> app = <span>await</span> <span class="brown">NestFactory</span>.<span class="light-blue">create</span>(App<span class="brown">Module</span>);</p>
                    <p><span class="gap"></span>app.<span class="light-blue">use</span><br>(apiToolkitClient.<br>expressMiddleware);</p>
                    <p><span class="gap"></span><span class="purple">await</span> app.<span class="light-blue">listen</span>(<span class="brown">3000</span>);</p>
                    <p>}<br><span class="fade">//</span></p>
                    <p><span class="light-blue">bootstrap</span>( );</p>
                </section>
                <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/nodejs/nestjs"><b>NestJS SDK guide</b></a> to learn more.</p>
        `,

        mux: `
            <h2>Golang Gorilla Mux</h2>
                <p class="space-down">Here's how to quickly integrate APItoolkit into your Golang Gorilla Mux application.</p>
                <h2>Installation</h2>
                <section class="code-five-codepad">
                    <p>go get -u github.com/gorilla/mux</p>
                </section>
                <h2>Integrate</h2>
                <section class="code-five-codepad">
                    <p><span class="purple">package</span> main</p><br>
                    <p><span class="purple">import</span> (</p>
                    <p><span class="gap"></span><span class="lemon">"context"</span></p>
                    <p><span class="gap"></span><span class="lemon">"net/http"</span></p>
                    <p><span class="gap"></span><span class="lemon">"github.com/gorilla/mux"</span></p>
                    <p><span class="gap"></span>apitoolkit <span class="lemon">"github.com/apitoolkit/apitoolkit-go"</span></p>
                    <p>)</p><br>
                    <p><span class="purple">func</span> <span class="light-blue">main</span>( ) {</p>
                    <p><span class="gap"></span>ctx := context.Background( )</p>
                    <p><span class="gap"></span><span class="fade">// Initialize the client using your generated apikey</span></p>
                    <p><span class="gap"></span>apitoolkitClient, err := apitoolkit.NewClient(ctx, apitoolkit.Config{APIKey: <span class="lemon"><br><span class="gap"></span>"{YOUR_API_KEY_HERE}"</span><br>})</p>
                    <p><span class="gap"></span><span class="purple">if</span> err != <span class="light-blue">nil</span> {</p>
                    <p><span class="gap"></span><span class="gap"></span><span class="brown">panic</span>(err)</p>
                    <p><span class="gap"></span>}</p><br>
                    <p><span class="gap"></span>r := mux.NewRouter( )</p>
                    <p><span class="gap"></span><span class="fade">// Register middleware</span></p>
                    <p><span class="gap"></span>r.Use(apitoolkitClient.<br>GorillaMuxMiddleware)</p>
                    <p>}</p>
                </section>
                <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/golang/gorillamux"><b>Go Gorilla Mux SDK guide </b></a> to learn more.</p>
        `,

        pyramid: `
            <h2>Pyramid</h2>
                <p class="space-down">Here's how to quickly integrate APItoolkit into your Pyramid application.</p>
                <h2>Installation</h2>
                <section class="code-five-codepad">
                    <p>pip install apitoolkit-pyramid</p>
                </section>
                <h2>Integrate</h2>
                <section class="code-five-codepad">
                    <p><span class="purple">from</span> wsgiref.simple_server <span class="purple">import</span> make_server</p>
                    <p><span class="purple">from</span> pyramid.config <span class="purple">import</span> Configurator</p>
                    <p><span class="purple">from</span> pyramid.response <span class="purple">import</span> Response</p>
                    <p><span class="purple">from</span> pyramid.view <span class="purple">import</span> view_config</p><br>
                    <p><span class="light-blue">@view_config(</span></p>
                    <p><span class="light-blue">route_name</span>=<span class="lemon">'home'</span></p>
                    <p><span class="light-blue">)</span></p>
                    <p><span class="purple">def</span> <span class="light-blue">home</span>(request):</p>
                    <p><span class="purple">return</span> Response(<span class="lemon">'Welcome!'</span>)</p><br>
                    <p><span class="purple">if</span> __name__ == <span class="lemon">'__main__'</span>:</p>
                    <p>setting = {<span class="lemon">"APITOOLKIT_KEY"</span>: <span class="lemon">"{YOUR_API_KEY_HERE}"</span>}</p>
                    <p><span class="purple">with</span> Configurator<br>(settings=setting) <span class="purple">as</span> config:</p>
                    <p><span class="fade"># Add APItoolkit tween</span></p>
                    <p>config.add_tween<br>(<span class="lemon">"apitoolkit_pyramid.<br>APIToolkit"</span>)</p>
                    <p>config.add_route(<span class="lemon">'home'</span>, <span class="lemon">'/'</span>)</p>
                    <p>config.scan( )</p>
                    <p>app = config.make_wsgi_app( )</p>
                    <p>server = make_server(<span class="lemon">'0.0.0.0'</span>, <span class="brown">6543</span>, app)</p>
                    <p>server.serve_forever( )</p>
                </section>
                <p id="read-guide">⏭️: Read the <a href="https://apitoolkit.io/docs/sdks/python/pyramid"><b>Pyramid SDK guide</b></a> to learn more.</p>
        `,
    };

    // Function to update the content
    function updateContent(content) {
        document.getElementById('code-five').innerHTML = content;
    };

     // Attach event listeners to each div
// Store a reference to the previously clicked div
let previousClickedDiv = document.getElementById('div1');

// Initialize the first div with the updated border style
previousClickedDiv.style.border = "3px solid rgb(147, 147, 250)";

function updateBorder(clickedDiv) {
    // Remove border from the previously clicked div if it exists
    if (previousClickedDiv) {
        previousClickedDiv.style.transition = "none"; // Temporarily disable transition
        previousClickedDiv.style.border = "1px solid grey";
        setTimeout(() => {
            previousClickedDiv.style.transition = "all 0.3s"; // Re-enable transition
        }, 10); // Small timeout to allow the style to be applied
    }
    // Apply the new border to the clicked div
    clickedDiv.style.transition = "none"; // Temporarily disable transition
    clickedDiv.style.border = "3px solid rgb(147, 147, 250)";
    setTimeout(() => {
        clickedDiv.style.transition = "all 0.3s"; // Re-enable transition
    }, 10); // Small timeout to allow the style to be applied

    // Update the reference to the currently clicked div
    previousClickedDiv = clickedDiv;
}

document.getElementById('div1').addEventListener('click', () => {
    updateContent(frameworkContent.express);
    updateBorder(document.getElementById('div1'));
});
document.getElementById('div2').addEventListener('click', () => {
    updateContent(frameworkContent.phoenix);
    updateBorder(document.getElementById('div2'));
});
document.getElementById('div3').addEventListener('click', () => {
    updateContent(frameworkContent.laravel);
    updateBorder(document.getElementById('div3'));
});
document.getElementById('div4').addEventListener('click', () => {
    updateContent(frameworkContent.nest);
    updateBorder(document.getElementById('div4'));
});
document.getElementById('div5').addEventListener('click', () => {
    updateContent(frameworkContent.django);
    updateBorder(document.getElementById('div5'));
});
document.getElementById('div6').addEventListener('click', () => {
    updateContent(frameworkContent.go);
    updateBorder(document.getElementById('div6'));
});
document.getElementById('div7').addEventListener('click', () => {
    updateContent(frameworkContent.fastapi);
    updateBorder(document.getElementById('div7'));
});
document.getElementById('div8').addEventListener('click', () => {
    updateContent(frameworkContent.symfony);
    updateBorder(document.getElementById('div8'));
});
document.getElementById('div9').addEventListener('click', () => {
    updateContent(frameworkContent.flask);
    updateBorder(document.getElementById('div9'));
});
document.getElementById('div10').addEventListener('click', () => {
    updateContent(frameworkContent.gin);
    updateBorder(document.getElementById('div10'));
});
document.getElementById('div11').addEventListener('click', () => {
    updateContent(frameworkContent.adonis);
    updateBorder(document.getElementById('div11'));
});
document.getElementById('div12').addEventListener('click', () => {
    updateContent(frameworkContent.fastify);
    updateBorder(document.getElementById('div12'));
});
document.getElementById('div13').addEventListener('click', () => {
    updateContent(frameworkContent.nest2);
    updateBorder(document.getElementById('div13'));
});
document.getElementById('div14').addEventListener('click', () => {
    updateContent(frameworkContent.mux);
    updateBorder(document.getElementById('div14'));
});
document.getElementById('div15').addEventListener('click', () => {
    updateContent(frameworkContent.pyramid);
    updateBorder(document.getElementById('div15'));
});






});
