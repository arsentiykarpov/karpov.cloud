# !/bin/bash
cd ../public/
generate_pdf() {
    local lang="$1"

    if [[ "$lang" != "en" && "$lang" != "ru" ]]; then
        echo "❌ Usage: generate_pdf en|ru"
        return 1
    fi

    echo "📄 Generating PDF for language: $lang"

    local output_md="combined_${lang}.md"
    local output_pdf="output_${lang}.pdf"
    local output_html="output_${lang}.html"
    
    rm "$output_md" "$output_pdf" "$output_html"

    local files=$(ls ./md/${lang}/*.md 2>/dev/null | sort)

    if [[ -z "$files" ]]; then
        echo "❌ No Markdown files found matching '*.md'"
        return 1
    fi

    cat $files > "$output_md"

    pandoc "$output_md" -f markdown -t html5 -o "$output_html" \
        --metadata title="Document ($lang)" --resource-path=.:../../public:../../: \
        || { echo "❌ Failed to generate PDF."; return 1; }

    echo "✅ Successfully created: $output_html"
    firefox "$output_html"

    chromium --headless \
         --disable-gpu \
         --no-margins \
         --no-pdf-header-footer \
         --virtual-time-budget=10000 \
         --print-to-pdf="$output_pdf"\
         "$output_html"
         firefox "$output_pdf"

         cp "$output_pdf" ./pdf/${lang}/ArsentiiKarpov.pdf || {echo "Failed to copy pdf"}
}

generate_pdf en 
generate_pdf ru 
