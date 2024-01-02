

const Topbar = () => {
    return (
      <div className="border">
        <nav class="bg-white text-black p-4">
          <div class="container mx-auto flex justify-between items-center">
            <a href="#" class=" text-lg font-bold">
              JobSeekers
            </a>

            <div class="space-x-4">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">Others</a>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Topbar;