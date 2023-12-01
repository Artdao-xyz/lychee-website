<script>
    import "/src/app.css"
</script>

<div class="h-screen w-screen font-geist text-white flex flex-col justify-between md:pt-9 md:max-w-[1440px] md:mx-auto">
    <header class="my-8 md:ml-8 md:mt-0 md:p-0 md:self-start">
        <a class="flex justify-center" href="/"><img src="/lychee-logo.svg" alt="Lychee Logo"></a>
    </header>

    <main class="mx-8 md:mx-20 md:flex md:justify-center">
        <div class="md:w-3/6 md:flex md:flex-col md:gap-11 md:justify-center">
            <h1 class="font-bold text-[54px] break-words text-center  leading-[90%] tracking-[-2.1px] md:text-left md:text-8xl md:tracking-[-4px]">Lychee<br>Protocol is<br>on the horizon</h1>
            <p class="hidden font-bold md:text-2xl md:block">First DeFi super App</p>
            <div class="hidden md:flex md:items-center md:gap-2">
                <p class="text-white/50 md:text-xl">Powered by</p>
                <img src="/layer-zero.svg" alt="Layer Zero">
            </div>
        </div>

        <div class="grow self-center -mt-8 md:m-auto">
            <img class="m-auto" src="/lychee-hero.png" alt="Lychee Hero">
        </div>

        <p class="text-center font-bold my-6 text-3xl tracking-[-0.5px] md:hidden">First DeFi super App</p>

        <div class="flex items-center justify-center gap-2 md:hidden">
            <p class="text-white/50 text-xl font-normal ">Powered by</p>
            <img src="/layer-zero.svg" alt="Layer Zero">
        </div>
    </main>

    <footer class="bg-lychee-green text-black py-6 md:py-10 px-ch16 gap-4 flex justify-center rounded-t-[105px] md:rounded-t-full md:items-center">
            <a href={'#'} class="md:mx-4 border-black border rounded-full py-2.5 md:py-2.5 px-6 md:px-8 text-base uppercase tracking-[-0.5px] md:leading-4">Join our Discord</a>
            <a class="my-auto md:mx-4" href={'#'}><img src="/x.svg" alt="Twitter"></a>
    </footer>
</div>