import React from 'react'

const DataHeading = () => {
  return (
    <>
        <main className="pt-16 md:pt-20 mb-16">
            <section className="py-12">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                ICE RAID AND DEPORTATION TRACKER
                </h1>
                <p className="text-lg md:text-xl max-w-2xl text-center">
                    Deportation Statistics Dashboard
                    <small className="block mt-2 text-sm text-muted-foreground">“IceOut aggregates publicly available news and community-submitted reports. 
                        User submissions are unverified and may be inaccurate. IceOut does not confirm enforcement 
                        actions or track activity and does not provide real-time alerts. Data is for informational purposes only.”
                        </small>
                </p> 
            </div>
            </section>
            <section></section>
        </main>
      
    </>
  )
}

export default DataHeading
