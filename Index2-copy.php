<?php
define('TITLE', 'PS Learning Center');
include __DIR__ . '/../../layout/header.php';
?>
<h1>Provider Services | Learning Center</h1>
<?php include __DIR__ . '/../../layout/headerNavPS.php'; ?>
<script src="https://cdn.tailwindcss.com/3.4.17"></script>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet">

<main>

    <div class="grid-learningCenter">
        <section id="lc_Videos">
            <div class="card-lookup">
                <div class="card-image">
                    <img src="./Thumbnails/NewHire.PNG" alt="New Hire Orientation">
                </div>
                <div class="muted">Published: 7/02/2026</div>
                <a href="https://share.articulate.com/vZ1zouTfv9hI60V_bx5V3" target="_blank" rel="noopener">
                    <h3 class="card-title">New Hire Introduction</h3>
                </a>

                <div class="muted">Welcome to Provider Services Department. New Hire Introduction </div>
            </div>
            <div class="card-lookup">
                <div class="card-image">
                    <img src="./Thumbnails/Reports.PNG" alt="Efiles">
                </div>
                <div class="muted">Published: 4/23/2026</div>
                <a href="https://cdasd.sharepoint.com/:v:/s/PSAdmin/IQDrPMkOzDSOTqymuHDTHeo8ASlfZQHZf1zKpU2XoUt77VM?e=5pkmvL"
                    target="_blank" rel="noopener">
                    <h3 class="card-title">Efiles Report</h3>
                </a>

                <div class="muted">How to read EFiles Report</div>
            </div>
            <div class="card-lookup">
                <div class="card-image">
                    <img src="./Thumbnails/ARPolicyRefresh2026.PNG" alt="AR Policy Refresh 2026">
                </div>
                <div class="muted">Published: 7/07/2026</div>
                <a href="https://zoom.us/clips/share/2c3FoT6pSU2RpM4ceyZBZA" target="_blank" rel="noopener">
                    <h3 class="card-title">New Attendance Records Submission</h3>
                </a>

                <div class="muted">This is a refresher on the New Attendance Records Submission for 2026.</div>
            </div>
            <div class="card-lookup">
                <div class="card-image">
                    <img src="./Thumbnails/RateSheet_CT.PNG" alt="Rate Sheet and Contractual Terms">
                </div>
                <div class="muted">Published: 5/28/2026</div>
                <a href="https://zoom.us/clips/share/Yq7gdq3QRneOAJJGCMQdVQ" target="_blank" rel="noopener">
                    <h3 class="card-title">Rate Sheet and Contractual Terms</h3>
                </a>

                <div class="muted">Refresher 2026 of Rate Sheet and Contractual Terms</div>
            </div>
        </section>

        <section id="lc_Documents shrink-0">
            <div class="doc-scroll">
                <section class="doc-panel pt-2 ... ">
                    <div class="search-container search-container-LearningCenter">
                        <p id="page-subtitle">
                            Lookup Quick Steps and Reference Documents
                        </p>

                        <div class="search-row-LearningCenter">
                            <div class="search-input-wrapper relative flex-1">
                                <i data-lucide="search" class="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    w-5
                                    h-5
                                    text-teal-600
                                    pointer-events-none
                                    z-10
                                    ">
                                </i>
                                <input id="search-input" type="text" placeholder="Search documents..." class="
                                    pl-12
                                    pr-4
                                    py-3.5
                                    rounded-lg
                                    bg-white
                                    placeholder-gray-400
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-teal-400
                                    shadow-lg
                                    ">
                            </div>

                            <button id="search-reset" type="button" class="search-reset-button">
                                <i data-lucide="rotate-ccw" class="search-reset-icon">
                                </i>

                                <span>Reset</span>
                            </button>
                        </div>
                    </div>

                </section>

                <section class="doc-panel">
                    <div id="empty-state" class="hidden max-w-none mx-auto px-6 text-center py-16">
                        <i data-lucide=" search-x" class="w-12 h-12 text-gray-300 mx-auto mb-4">
                        </i>
                        <p class=" text-gray-500 text-lg">
                            No documents found matching your search.
                        </p>
                    </div>
                </section>

                <section class="doc-panel">
                    <div class="w-full px-6" id="template-container"></div>
                    <div id="viewer-home">
                        <div id="document-viewer"
                            class="hidden w-full max-w-none bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                            <div
                                class="flex items-center justify-between border-b border-gray-200 px-5 py-4 bg-gray-50">
                                <div class="flex items-center gap-3 min-w-0">
                                    <i data-lucide="file-text" class="w-5 h-5 text-navy-500 flex-shrink-0">
                                    </i>
                                    <h3 id="viewer-title" class="font-semibold text-navy-800 truncate">
                                        Document Preview
                                    </h3>
                                </div>
                                <div id="viewer-actions" class="hidden flex items-center gap-2">
                                    <a id="viewer-new-tab" href="#" target="_blank" rel="noopener noreferrer"
                                        title="Open in new tab" class="inline-flex items-center justify-center
                                            w-9 h-9 rounded-lg
                                            border border-gray-300
                                            text-gray-600
                                            hover:bg-gray-100
                                            hover:text-navy-700
                                            transition">

                                        <i data-lucide="external-link" class="w-4 h-4">
                                        </i>
                                    </a>
                                    <a id="viewer-download" href="#" target="_blank" rel="noopener noreferrer"
                                        title="Download document" class="inline-flex items-center gap-2
                                            px-3 py-2 rounded-lg
                                            bg-navy-600 text-white
                                            hover:bg-navy-700
                                            transition">

                                        <i data-lucide="download" class="w-4 h-4">
                                        </i>

                                        <span class="hidden sm:inline">
                                            Download
                                        </span>

                                    </a>

                                </div>

                            </div>

                            <iframe id="document-frame" class="hidden block w-full max-w-none border-0" style="width: 100%; min-width: 100%; height: 85vh; min-height: 800px;" title="Document Preview" allowfullscreen>
                            </iframe>

                        </div>

                    </div>

                </section>
            </div>

        </section>
    </div>

</main>
<script src="../../scripts/LearningCenterDocs.js"></script>
<?php
include __DIR__ . '/../../layout/footer.html';
?>
