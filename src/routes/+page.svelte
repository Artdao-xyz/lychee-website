<script>
    import "/src/app.css"
</script>

<div class="h-screen w-screen font-geist text-white flex flex-col justify-between md:pt-9 md:max-w-[1440px] md:mx-auto">
    <header class="py-8 md:ml-8 md:mt-0 md:p-0 md:self-start">
        <a class="flex justify-center" href="/"><img src="/lychee-logo.svg" alt="Lychee Logo"></a>
    </header>

    <main class="flex flex-col justify-center gap-4 sm:gap-10 mx-8 md:mx-20 md:flex md:flex-row md:justify-center md:gap-0">
        <div class="md:w-3/6 md:flex md:flex-col md:gap-8 md:justify-center">
            <h1 class="font-bold text-[48px] sm:text-[54px] break-words text-center leading-[90%] tracking-[-2.1px] md:text-left md:text-8xl md:tracking-[-4px] md:ml-0">Lychee<br>Protocol is<br>on the horizon</h1>
            <p class="hidden font-bold md:text-2xl md:block">First DeFi super App</p>
            <div class="hidden md:flex md:items-center md:gap-2">
                <p class="text-white/50 md:text-xl">Powered by</p>
                <img src="/layer-zero.svg" alt="Layer Zero">
            </div>
        </div>

        <div class="w-[75%] h-[75%] sm:w-[100%] sm:h-[100%] mx-auto -mt-8 sm:-mt-20 md:m-auto md:w-fit md:h-fit ">
            <img class="mt-0 mb-auto  sm:m-auto" src="/lychee-hero.png" alt="Lychee Hero">
        </div>

        <div class="md:hidden flex flex-col">
            <p class="text-center font-bold text-2xl sm:text-3xl tracking-[-0.5px] md:hidden">First DeFi super App</p>
            
            <div class="flex items-center justify-center gap-2 mb-2 md:hidden">
                <p class="text-white/50 text-l sm:text-xl font-normal ">Powered by</p>
                <img src="/layer-zero.svg" alt="Layer Zero">
            </div>
        </div>

    </main>

    <footer class="bg-lychee-green text-black py-4 sm:py-8 md:py-10 gap-4 flex justify-center rounded-t-[105px] md:rounded-t-full md:items-center">
            <a href='https://Discord.gg/lychee' class="md:mx-4 border-black border rounded-full py-2.5 md:py-2.5 px-6 md:px-8 text-base uppercase tracking-[-0.5px] md:leading-4">Join our Discord</a>
            <a class="my-auto md:mx-4" href='https://twitter.com/LycheeProtocol'><img src="/x.svg" alt="Twitter"></a>
    </footer>
</div>